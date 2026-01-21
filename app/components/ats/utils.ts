const getGradientClass = (score: number): string =>
	score > 69
		? 'from-green-100'
		: score > 49
			? 'from-yellow-100'
			: 'from-red-100';

const getIconSrc = (score: number): string =>
	score > 69
		? '/icons/ats-good.svg'
		: score > 49
			? '/icons/ats-warning.svg'
			: '/icons/ats-bad.svg';

export { getGradientClass, getIconSrc };
