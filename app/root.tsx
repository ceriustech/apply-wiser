import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from 'react-router';

import type { Route } from './+types/root';
import './app.css';

export const links: Route.LinksFunction = () => [
	// Fonts
	{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
	{
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
	},
	{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '96x96',
		href: '/favicon-96x96.png',
	},
	{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
	{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '192x192',
		href: '/web-app-manifest-192x192.png',
	},
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '512x512',
		href: '/web-app-manifest-512x512.png',
	},

	// PWA manifest (optional but recommended)
	{ rel: 'manifest', href: '/site.webmanifest' },
	{ rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = 'Oops!';
	let details = 'An unexpected error occurred.';
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? '404' : 'Error';
		details =
			error.status === 404
				? 'The requested page could not be found.'
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="pt-16 p-4 container mx-auto">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
