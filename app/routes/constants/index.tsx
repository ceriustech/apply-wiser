export interface Routes {
	id: string;
	path: string;
	name: string;
	component: string;
	access: 'public' | 'private' | 'auth';
}

const PAGE_ROUTES_DATA: Record<string, Routes> = {
	HOME: {
		id: 'home',
		path: '/',
		name: 'Home',
		component: 'routes/pages/private/home/index.tsx',
		access: 'private',
	},
	RESUME: {
		id: 'resume',
		path: '/resume',
		name: 'Resume',
		component: 'routes/pages/private/resume/index.tsx',
		access: 'private',
	},
	UPLOAD: {
		id: 'upload',
		path: '/upload',
		name: 'Upload',
		component: 'routes/pages/private/upload/index.tsx',
		access: 'private',
	},
	WIPE: {
		id: 'wipe',
		path: '/wipe',
		name: 'Wipe',
		component: 'routes/pages/private/wipe/index.tsx',
		access: 'private',
	},
	AUTH: {
		id: 'auth',
		path: '/auth',
		name: 'Auth',
		component: 'routes/pages/auth/index.tsx',
		access: 'auth', // special case
	},
	FAQ: {
		id: 'faq',
		path: '/faq',
		name: 'FAQ',
		component: 'routes/pages/public/faq/index.tsx',
		access: 'public',
	},
	LANDING: {
		id: 'landing',
		path: '/landing',
		name: 'Landing',
		component: 'routes/pages/public/landing/index.tsx',
		access: 'public',
	},
};

export { PAGE_ROUTES_DATA };
