export interface Routes {
	id: string;
	path: string;
	name: string;
	component: string;
	access: 'public' | 'private' | 'auth';
	layout?: string;
}

const PAGE_ROUTES_DATA: Record<string, Routes> = {
	HOME: {
		id: 'home',
		path: '/',
		name: 'Home',
		component: 'routes/pages/private/home/index.tsx',
		access: 'private',
		layout: 'routes/components/layout/index.tsx',
	},
	RESUME: {
		id: 'resume',
		path: '/resume',
		name: 'Resume',
		component: 'routes/pages/private/resume/index.tsx',
		access: 'private',
		layout: 'routes/components/layout/index.tsx',
	},
	UPLOAD: {
		id: 'upload',
		path: '/upload',
		name: 'Upload',
		component: 'routes/pages/private/upload/index.tsx',
		access: 'private',
		layout: 'routes/components/layout/index.tsx',
	},
	WIPE: {
		id: 'wipe',
		path: '/wipe',
		name: 'Wipe',
		component: 'routes/pages/private/wipe/index.tsx',
		access: 'private',
		layout: 'routes/components/layout/index.tsx',
	},
	AUTH: {
		id: 'auth',
		path: '/auth',
		name: 'Auth',
		component: 'routes/pages/auth/index.tsx',
		access: 'public',
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
