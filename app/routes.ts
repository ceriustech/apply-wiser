import { type RouteConfig, index, route } from '@react-router/dev/routes';

import { PAGE_ROUTES_DATA } from './routes/constants';

const ROUTES: RouteConfig = Object.values(PAGE_ROUTES_DATA).map((r) =>
	r.id === 'home' ? index(r.component) : route(r.path, r.component)
);

export default ROUTES;
