import { Link } from 'react-router';

import NavBarIcon from './components/navBarIcon';

const NavBar = () => {
	return (
		<nav className="navbar">
			<NavBarIcon />
			{/* <p className="text-2xl font-bold text-gradient">HOME</p> */}
			<Link to="/upload" className="primary-button w-fit">
				Upload Resume
			</Link>
		</nav>
	);
};

export default NavBar;
