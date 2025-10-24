import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import type { Route } from './+types';
import { usePuterStore } from '~/lib/puter';

import { createTypedMetaFunction } from '~/site_header_data/utils';
import { AUTH_META_DATA } from '~/site_header_data/meta_data';

export const meta = createTypedMetaFunction<Route.MetaArgs>(AUTH_META_DATA);

const Auth = () => {
	const { isLoading, auth } = usePuterStore();
	const location = useLocation();
	const next = location.search.split('next=')[1];
	const navigate = useNavigate();

	useEffect(() => {
		if (auth.isAuthenticated) navigate(next);
	}, [auth.isAuthenticated, next]);

	return (
		<main className="relative min-h-screen pt-10 bg-applywiser-gradient overflow-hidden flex items-center justify-center">
			<div className="gradient-border shadow-lg">
				<section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
					<div className="flex flex-col items-center gap-2 text-center">
						<h1>Welcome</h1>
						<h2>Log in</h2>
					</div>
					<div>
						{isLoading ? (
							<button className="auth-button animate-pulse">
								<p>Signing you in...</p>
							</button>
						) : (
							<>
								{auth.isAuthenticated ? (
									<button className="auth-button" onClick={auth.signOut}>
										<p>Log Out</p>
									</button>
								) : (
									<button className="auth-button" onClick={auth.signIn}>
										<p>Log In</p>
									</button>
								)}
							</>
						)}
					</div>
				</section>
			</div>
		</main>
	);
};

export default Auth;
