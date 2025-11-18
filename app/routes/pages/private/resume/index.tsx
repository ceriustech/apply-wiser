import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import type { Route } from './+types';

import { createTypedMetaFunction } from '~/site_header_data/utils';
import { RESUME_META_DATA } from '~/site_header_data/meta_data';

export const meta = createTypedMetaFunction<Route.MetaArgs>(RESUME_META_DATA);

const Resume = () => {
	const [imageUrl, setImageUrl] = useState('');
	const [resumeUrl, setResumeUrl] = useState('');
	const { id } = useParams();

	return (
		<main className="!pt-0">
			<nav className="resume-nav">
				<Link to="/" className="back-button">
					<img src="/icons/back.svg" alt="back logo" className="w-2.5 h-2.5" />
					<span className="text-gray-800 text-sm font-semibold">
						Back to Homepage
					</span>
				</Link>
			</nav>
			<div className="flex flex-row w-full max-lg:flex-col-reverse">
				<section className="fedback-section animate-in fade-in duration-1000 gradient-border max-sm:m-0 h-[90%] max-wxl:h-fit w-fit">
					{imageUrl && resumeUrl && (
						<div className="animate-in fade-in duration-1000 gradient-border max-sm:m-0 h-[90%] max-wxl:h-fit w-fit">
							<a href={resumeUrl} target="_blank" rel="noopener noreferrer">
								<img
									src={imageUrl}
									className="w-full h-full object-contain rounded-2xl"
									title="resume"
								/>
							</a>
						</div>
					)}
				</section>
			</div>
		</main>
	);
};

export default Resume;
