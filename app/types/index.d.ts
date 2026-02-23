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
	| 'scannability'
	| 'bulletPointQuality'
	| 'roleAlignment'
	| 'presentationAndClarity'
	| 'skills';

type Feedback = {
	overallScore: number;
	resume: {
		score: number;
		tips: Tip[];
	};
} & {
	[K in FeedbackCategory]: {
		score: number;
		tips: DetailedTip[];
	};
};

interface NAVIGATION {
	url: string;
	name: string;
}
