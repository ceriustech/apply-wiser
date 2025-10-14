interface Resume {
	id: string;
	companyName: string;
	jobTitle: string;
	imagePath: string;
	resumePath: string;
	feedback: Feedback;
}

type FeedbackCategory =
	| 'ATS'
	| 'toneAndStyle'
	| 'content'
	| 'structure'
	| 'skills';

type Feedback = {
	overallScore: number;
} & {
	[K in FeedbackCategory]: {
		score: number;
		tips: string[];
	};
};
