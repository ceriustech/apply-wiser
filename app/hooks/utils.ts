import { useState, useEffect } from 'react';

type UseMediaQueryOptions = {
	query: string;
};
/**
 * Custom hook for media query matching
 * @returns {boolean} - Whether the media query matches
 */
export const useMediaQuery = ({ query }: UseMediaQueryOptions): boolean => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const mediaQuery = window.matchMedia(query);
		setMatches(mediaQuery.matches);

		const handleChange = (event: MediaQueryListEvent) => {
			setMatches(event.matches);
		};

		// Just use the modern API - no fallback needed
		mediaQuery.addEventListener('change', handleChange);

		return () => {
			mediaQuery.removeEventListener('change', handleChange);
		};
	}, [query]);

	return matches;
};
