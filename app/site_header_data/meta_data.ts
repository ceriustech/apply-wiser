const HOME_META_DATA: PageMetaData[] = [
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

const AUTH_META_DATA: PageMetaData[] = [
	{ title: 'ApplyWiser | Auth' },
	{
		name: 'description',
		content:
			'Log in to your ApplyWiser account to access your AI-powered resume tools and job application insights.',
	},
	{
		name: 'keywords',
		content:
			'AI resume builder login, ApplyWiser login, resume AI tool sign in, job application dashboard login, AI resume tailoring login, AI resume editor login, custom resume generator, resume personalization tool, resume analysis login, career AI assistant login',
	},
];

const RESUME_META_DATA: PageMetaData[] = [
	{ title: 'AI Resume Checker & ATS Score Analyzer | ApplyWiser' },
	{
		name: 'description',
		content:
			'Get your resume scored instantly with ApplyWiser. Analyze ATS compatibility, keyword optimization, formatting, and more using our AI-powered resume checker.',
	},
	{
		name: 'keywords',
		content:
			'AI resume checker, resume score, resume analysis tool, ATS resume test, resume optimization, resume feedback, job application tools, improve resume, resume grader, ATS compatibility',
	},
];

export { HOME_META_DATA, AUTH_META_DATA, RESUME_META_DATA };
