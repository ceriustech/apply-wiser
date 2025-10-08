import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Home | ApplyWiser' },
		{ name: 'description', content: 'AI for resume tailoring' },
	];
}

export default function Home() {
	return <Welcome />;
}
