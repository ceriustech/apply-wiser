import { Link } from 'react-router';
import { usePuterStore } from '~/lib/puter';

import NavBarIcon from './components/navBarIcon';

const NavBar = () => {
	const { auth } = usePuterStore();

	return (
		<nav className="navbar">
			<NavBarIcon />

			<div className="flex items-center gap-4">
				<Link to="/upload" className="primary-button w-fit">
					Rate My Resume
				</Link>

				{auth.isAuthenticated && (
					<button onClick={auth.signOut} className="secondary-button w-fit">
						Log Out
					</button>
				)}
			</div>
		</nav>
	);
};

export default NavBar;
