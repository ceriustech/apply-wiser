import type { Route } from './+types/home';

import { createTypedMetaFunction } from '~/site_header_data/utils';
import { AUTH_META_DATA } from '~/site_header_data/meta_data';

export const meta = createTypedMetaFunction<Route.MetaArgs>(AUTH_META_DATA);

const Auth = () => {
	return <div>Auth</div>;
};

export default Auth;
