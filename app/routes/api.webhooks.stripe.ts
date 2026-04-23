import type { ActionFunctionArgs } from 'react-router';
import { stripe } from '~/lib/stripe.server';
import { env } from '~/lib/env.server';
import { resend } from '~/lib/resend.server';

export const action = async ({ request }: ActionFunctionArgs) => {
	if (request.method !== 'POST') {
		return new Response('Method not allowed', { status: 405 });
	}

	// 1. Get the raw body and Stripe signature
	const payload = await request.text();
	const signature = request.headers.get('stripe-signature');

	if (!signature) {
		console.error('Missing stripe-signature header');
		return new Response('Missing signature', { status: 400 });
	}

	// 2. Verify the webhook is really from Stripe
	let event;
	try {
		event = stripe.webhooks.constructEvent(
			payload,
			signature,
			env.STRIPE_WEBHOOK_SECRET,
		);
	} catch (err) {
		console.error('Webhook signature verification failed:', err);
		return new Response('Invalid signature', { status: 400 });
	}

	// 3. Handle the event
	switch (event.type) {
		case 'checkout.session.completed': {
			const session = event.data.object;
			const customerEmail = session.customer_details?.email;

			if (!customerEmail) {
				console.error('No customer email found in session:', session.id);
				break;
			}

			console.log(`Payment received from ${customerEmail} — sending LIFT`);

			// 4. Send the delivery email
			try {
				await resend.emails.send({
					from: 'ApplyWiser <hello@applywiser.app>',
					to: customerEmail,
					subject: 'Your LIFT Job Application Tracker is ready!',
					html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
              <h1 style="color: #1e293b; font-size: 24px;">Welcome to LIFT!</h1>
              <p style="color: #475569; font-size: 16px; line-height: 1.6;">
                Thanks for your purchase! Your job application tracker is ready to go.
              </p>
              <p style="color: #475569; font-size: 16px; line-height: 1.6;">
                Click the button below to make a copy of LIFT to your Google Drive:
              </p>
              <a href="${env.GOOGLE_SHEET_COPY_URL}"
                 style="display: inline-block; background-color: #1e3a5f; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px; margin: 16px 0;">
                Get Your Copy of LIFT
              </a>
              <p style="color: #94a3b8; font-size: 14px; line-height: 1.6; margin-top: 24px;">
                <strong>How it works:</strong> Click the link above, then click "Make a copy" to save LIFT to your own Google Drive. 
                The sheet is yours — edit it however you like.
              </p>
              <p style="color: #94a3b8; font-size: 14px; margin-top: 32px;">
                Questions? Reply to this email and we'll help you out.
              </p>
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 32px 0;" />
              <p style="color: #94a3b8; font-size: 12px;">
                © 2026 ApplyWiser. Built by a job seeker, for job seekers.
              </p>
            </div>
          `,
				});
				console.log(`Delivery email sent to ${customerEmail}`);
			} catch (err) {
				console.error('Failed to send delivery email:', err);
			}

			break;
		}

		case 'charge.refunded': {
			const charge = event.data.object;
			console.log(`Refund processed for charge: ${charge.id}`);
			// We'll build this out later
			break;
		}

		default:
			console.log(`Unhandled event type: ${event.type}`);
	}

	// 5. Always return 200 — Stripe will retry if you don't
	return new Response('OK', { status: 200 });
};
