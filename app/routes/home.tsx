import type { Route } from './+types/home';

import NavBar from '~/components/nav_bar';
import { HOME_META_DATA } from '~/site_header_data/meta_data';

export function meta({}: Route.MetaArgs) {
	return HOME_META_DATA;
}

export default function Home() {
	return (
		<main className="bg-[url('/images/bg-main.svg')] bg-cover">
			<NavBar />
			<section className="main-section">
				<div className="page-heading">
					<h1>Track Your Applications & resume Ratings</h1>
					<h2>Review your submissions and check AI powered feedback.</h2>
				</div>
			</section>
			<section>
				{}
			</section>
		</main>
	);
}
