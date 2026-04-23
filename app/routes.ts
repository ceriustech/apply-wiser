import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
	index('routes/home.tsx'),
	route('api/checkout', 'routes/api.checkout.ts'),
	route('api/webhooks/stripe', 'routes/api.webhooks.stripe.ts'),
	route('success', 'routes/success.tsx'),
] satisfies RouteConfig;
