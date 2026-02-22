import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { usePuterStore } from '~/lib/puter';
import type { Route } from './+types';

import NavBar from '~/components/nav_bar';
import ResumeCard from '~/components/resume_card';
import { HOME_META_DATA } from '~/site_header_data/meta_data';
import { RESUME_DATA } from '~/constants';
import { createTypedMetaFunction } from '~/site_header_data/utils';

export const meta = createTypedMetaFunction<Route.MetaArgs>(HOME_META_DATA);

const Home = () => {
	const { auth, kv } = usePuterStore();
	const navigate = useNavigate();
	const [resumes, setResumes] = useState<Resume[]>([]);
	const [loadingResumes, setLoadingResumes] = useState(false);
	const isAuthenticated = auth.isAuthenticated;

	useEffect(() => {
		if (!isAuthenticated) navigate('/auth?next=/');
	}, [isAuthenticated]);

	useEffect(() => {
		const loadResumes = async () => {
			setLoadingResumes(true);

			const resumes = (await kv.list('resume:*', true)) as KVItem[];

			const parsedResumes = resumes?.map(
				(resume) => JSON.parse(resume.value) as Resume,
			);

			setResumes(parsedResumes || []);
			setLoadingResumes(false);
		};

		loadResumes();
	}, []);

	return (
		<main className="relative min-h-screen pt-10 bg-applywiser-gradient overflow-hidden">
			<NavBar />
			<section className="main-section">
				<div className="page-heading py-16">
					<h1>Apply Smarter & Land Sooner</h1>
					<h2>Get real-time insights and resume ratings powered by AI.</h2>
				</div>
				{loadingResumes && (
					<div className="resume-section">
						<img src="/images/resume-scan-2.gif" className="w-[200px]" />
					</div>
				)}

				{!loadingResumes && resumes.length > 0 && (
					<div className="resume-section">
						{resumes.map((resume) => (
							<ResumeCard key={resume.id} resume={resume} />
						))}
					</div>
				)}

				{!loadingResumes && resumes?.length === 0 && (
					<div className="flex flex-col items-center justify-center mt-10 gap-4">
						<Link
							to="/upload"
							className="primary-button w-fit text-xl font-semibold"
						>
							Upload Resume
						</Link>
					</div>
				)}
			</section>
		</main>
	);
};

export default Home;
