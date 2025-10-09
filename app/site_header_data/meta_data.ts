type HomeMetaDescriptor =
	| { title: string }
	| { name: string; content: string }
	| { property: string; content: string }
	| { httpEquiv: string; content: string };

const HOME_META_DATA: HomeMetaDescriptor[] = [
	{ httpEquiv: 'Content-type', content: 'text/html; charset=utf-8' },
	{
		name: 'viewport',
		content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0',
	},
	{ title: 'ApplyWiser' },
	{ name: 'description', content: 'AI for resume tailoring' },
	{
		name: 'keywords',
		content:
			'AI resume builder, resume tailoring, job application optimization, AI for job search, resume matching, ATS resume, resume analyzer, job-specific resume, CV optimizer, smart resume tool',
	},
	{ property: 'og:url', content: 'https://applywiser.app' },
	{ property: 'og:title', content: 'Apply Wiser' },
	{ property: 'og:description', content: 'AI resume helper' },
];

export { HOME_META_DATA };
