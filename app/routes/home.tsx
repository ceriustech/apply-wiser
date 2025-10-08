import type { Route } from './+types/home';

import { Welcome } from '../welcome/welcome';
import { HOME_META_DATA } from '~/site_header_data/meta_data';

export function meta({}: Route.MetaArgs) {
	return HOME_META_DATA;
}

export default function Home() {
	return <Welcome />;
}
