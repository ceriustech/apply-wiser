import {
	type RouteConfig,
	index,
	route,
	layout,
} from '@react-router/dev/routes';

import { PAGE_ROUTES_DATA } from './routes/constants';

const privateRoutes = Object.values(PAGE_ROUTES_DATA).filter(
	(r) => r.access === 'private'
);
const publicRoutes = Object.values(PAGE_ROUTES_DATA).filter(
	(r) => r.access === 'public'
);

const ROUTES: RouteConfig = [
	// Private routes wrapped in auth layout
	layout('routes/components/layout/index.tsx', [
		...privateRoutes.map((r) =>
			r.id === 'home' ? index(r.component) : route(r.path, r.component)
		),
	]),

	// Public routes (no layout)
	...publicRoutes.map((r) => route(r.path, r.component)),
];

export default ROUTES;
