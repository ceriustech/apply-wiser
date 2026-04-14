import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'ApplyWiser' },
		{ name: 'description', content: 'Welcome to ApplyWiser!' },
	];
}

export default function Home() {
	return <div>Hello</div>;
}
