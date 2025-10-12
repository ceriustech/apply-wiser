type Resume = {
	id: string;
	companyName: string;
	jobTitle: string;
	imagePath: string;
	resumePath: string;
	feedback: Feedback;
};

type FeedbackCategory = {
	score: number;
	tips: string[];
};

type Feedback = {
	overallScore: number;
	ATS: FeedbackCategory;
	toneAndStyle: FeedbackCategory;
	content: FeedbackCategory;
	structure: FeedbackCategory;
	skills: FeedbackCategory;
};

export const RESUMES: Resume[] = [
	{
		id: '1',
		companyName: 'Google',
		jobTitle: 'Frontend Developer',
		imagePath: '/images/resume_01.png',
		resumePath: '/resumes/resume-1.pdf',
		feedback: {
			overallScore: 85,
			ATS: {
				score: 90,
				tips: [],
			},
			toneAndStyle: {
				score: 90,
				tips: [],
			},
			content: {
				score: 90,
				tips: [],
			},
			structure: {
				score: 90,
				tips: [],
			},
			skills: {
				score: 90,
				tips: [],
			},
		},
	},
];
