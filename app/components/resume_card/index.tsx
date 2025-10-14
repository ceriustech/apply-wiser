import { Link } from 'react-router';

import ResumeScore from '../resume_score';

const ResumeCard = ({
	data: { id, companyName, jobTitle, feedback },
}: {
	data: Resume;
}) => {
	return (
		<Link
			to={`/resume/${id}`}
			className="resume-card animate-in fade-in duration-1000"
		>
			<div className="flex flex-col gap-2">
				<h2 className="!text-black font-bold break-words">{companyName}</h2>
				<h3 className="text-lg break-words text-gray-500">{jobTitle}</h3>
			</div>
			<div className="flex=shrink-0">
				<ResumeScore score={feedback.overallScore} />
			</div>
		</Link>
	);
};

export default ResumeCard;
