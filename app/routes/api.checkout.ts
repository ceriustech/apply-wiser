import type { ActionFunctionArgs } from 'react-router';
import { redirect } from 'react-router';
import { stripe } from '~/lib/stripe.server';
import { env } from '~/lib/env.server';

const getDomainUrl = (request: Request): string => {
	const host =
		request.headers.get('X-Forwarded-Host') ??
		request.headers.get('host') ??
		'localhost:5173';
	const protocol = host.includes('localhost') ? 'http' : 'https';
	return `${protocol}://${host}`;
};

export const action = async ({ request }: ActionFunctionArgs) => {
	if (request.method !== 'POST') {
		return new Response('Method not allowed', { status: 405 });
	}

	const session = await stripe.checkout.sessions.create({
		mode: 'payment',
		payment_method_types: ['card'],
		line_items: [
			{
				price: env.STRIPE_PRICE_ID,
				quantity: 1,
			},
		],
		success_url: `${getDomainUrl(request)}/success?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `${getDomainUrl(request)}/#pricing`,
	});

	if (!session.url) {
		throw new Response('Failed to create checkout session', { status: 500 });
	}

	return redirect(session.url);
};
