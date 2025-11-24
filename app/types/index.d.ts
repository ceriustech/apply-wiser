type PageMetaData =
	| { title: string }
	| { name: string; content: string }
	| { property: string; content: string }
	| { httpEquiv: string; content: string };

interface Tip {
	type: 'good' | 'improve';
	tip: string;
}

interface DetailedTip extends Tip {
	explanation: string;
}

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
	ATS: {
		score: number;
		tips: Tip[]; // ATS tips don't have explanations
	};
} & {
	[K in FeedbackCategory]: {
		score: number;
		tips: DetailedTip[]; // Other categories have explanations
	};
};

interface NAVIGATION {
	url: string;
	name: string;
}
