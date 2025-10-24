import type { Route } from './+types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { usePuterStore } from '~/lib/puter';

import NavBar from '~/components/nav_bar';
import ResumeCard from '~/components/resume_card';
import { HOME_META_DATA } from '~/site_header_data/meta_data';
import { RESUME_DATA } from '~/constants';
import { createTypedMetaFunction } from '~/site_header_data/utils';

export const meta = createTypedMetaFunction<Route.MetaArgs>(HOME_META_DATA);

const Home = () => {
	const { isInitialized, auth } = usePuterStore();
	const navigate = useNavigate();

	useEffect(() => {
		if (isInitialized && !auth.isAuthenticated) navigate('/auth?next=/');
	}, [isInitialized, auth.isAuthenticated, navigate]);

	if (!isInitialized || !auth.isAuthenticated) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-applywiser-gradient">
				<div>Loading...</div>
			</div>
		);
	}

	const hasResumeData = RESUME_DATA.length > 0;

	return (
		<main className="relative min-h-screen pt-10 bg-applywiser-gradient overflow-hidden">
			<NavBar />
			<section className="main-section">
				<div className="page-heading py-16">
					<h1>Apply Smarter. Track Your Applications & Land Sooner</h1>
					<h2>Get real-time insights and resume ratings powered by AI.</h2>
				</div>
				{hasResumeData && (
					<div className="resume-section">
						{RESUME_DATA.map((resume) => (
							<ResumeCard key={resume.id} data={resume} />
						))}
					</div>
				)}
			</section>
		</main>
	);
};

export default Home;
