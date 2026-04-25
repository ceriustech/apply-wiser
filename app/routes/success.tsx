import type { LoaderFunctionArgs } from 'react-router';
import { useLoaderData } from 'react-router';
import { stripe } from '~/lib/stripe.server';
import { env } from '~/lib/env.server';

export async function loader({ request }: LoaderFunctionArgs) {
	const url = new URL(request.url);
	const sessionId = url.searchParams.get('session_id');

	if (!sessionId) {
		return { status: 'missing_session' as const };
	}

	try {
		const session = await stripe.checkout.sessions.retrieve(sessionId);

		return {
			status: 'success' as const,
			email: session.customer_details?.email ?? null,
			copyUrl: env.GOOGLE_SHEET_COPY_URL,
		};
	} catch {
		return { status: 'invalid_session' as const };
	}
}

export default function SuccessPage() {
	const data = useLoaderData<typeof loader>();

	console.log('Loader data:', data);

	if (data.status !== 'success') {
		return (
			<main className="min-h-screen flex items-center justify-center font-sans">
				<div className="text-center max-w-md px-6">
					<h1 className="text-2xl font-bold text-slate-900 mb-4">
						Something doesn't look right
					</h1>
					<p className="text-slate-600 mb-6">
						We couldn't verify your purchase. If you just completed a payment,
						check your email for the delivery link.
					</p>

					<a href="/" className="text-blue-700 hover:text-blue-900 font-medium">
						← Back to home
					</a>
				</div>
			</main>
		);
	}

	return (
		<main className="min-h-screen flex items-center justify-center font-sans">
			<div className="text-center max-w-lg px-6">
				<div className="text-5xl mb-6">🎉</div>
				<h1 className="text-3xl font-bold text-slate-900 mb-4">
					You're all set!
				</h1>
				<p className="text-lg text-slate-600 mb-2">
					Thanks for purchasing LIFT.
				</p>
				{data.email && (
					<p className="text-slate-600 mb-8">
						We sent a delivery email to{' '}
						<span className="font-semibold text-slate-900">{data.email}</span>
					</p>
				)}

				<a
					href={data.copyUrl}
					// href={env.GOOGLE_SHEET_COPY_URL}
					target="_blank"
					rel="noopener noreferrer"
					className="cursor-pointer inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] mb-4"
				>
					Get Your Copy of LIFT
					<span>→</span>
				</a>

				<p className="text-sm text-slate-500 mt-4">
					Click the button above to copy LIFT to your Google Drive.
					<br />
					You can also find this link in your email.
				</p>

				<a
					href="/"
					className="inline-block mt-8 text-blue-700 hover:text-blue-900 font-medium text-sm"
				>
					← Back to home
				</a>
			</div>
		</main>
	);
}
