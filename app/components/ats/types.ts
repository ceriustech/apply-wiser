interface Suggestion {
	type: 'good' | 'improve';
	tip: string;
}

interface ATSProps {
	score: number;
	suggestions: Suggestion[];
}

export type { Suggestion, ATSProps };
