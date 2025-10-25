import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router';
import { usePuterStore } from '~/lib/puter';

interface AuthLoaderhProps {
	children: ReactNode;
}

const AuthLoader = ({ children }: AuthLoaderhProps) => {
	const { isInitialized, isLoading, auth } = usePuterStore();
	const location = useLocation();

	if (!isInitialized) {
		return null;
	}

	if (!auth.isAuthenticated) {
		return <Navigate to={`/auth?next=${location.pathname}`} replace />;
	}

	// Render children if authenticated
	return <>{children}</>;
};

export default AuthLoader;
