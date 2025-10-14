import type { Route } from './+types/home';

import NavBar from '~/components/nav_bar';
import ResumeCard from '~/components/resume_card';
import { HOME_META_DATA } from '~/site_header_data/meta_data';
import { RESUME_DATA } from '~/constants';

export function meta({}: Route.MetaArgs) {
	return HOME_META_DATA;
}

export default function Home() {
	const hasResumeData = RESUME_DATA.length > 0;

	return (
		<main className="relative min-h-screen pt-10 bg-applywiser-gradient overflow-hidden">
			<NavBar />
			<section className="main-section">
				<div className="page-heading">
					<h1>Track Your Applications & resume Ratings</h1>
					<h2>Review your submissions and check AI powered feedback.</h2>
				</div>
			</section>
			{hasResumeData && (
				<section className="resume-section">
					{RESUME_DATA.map((resume) => (
						<ResumeCard key={resume.id} data={resume} />
					))}
				</section>
			)}
		</main>
	);
}
