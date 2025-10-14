import { Link } from 'react-router';

import { useMediaQuery } from '~/hooks/utils';
import { QUERIES } from '~/hooks/constants';

const NavBarIcon = () => {
	const isMobile = useMediaQuery({ query: QUERIES.mobileOnly });

	return (
		<Link to="/">
			{isMobile ? (
				<div className="flex items-center justify-center w-20 h-10 relative top-[3px] right-[25px]">
					<img
						src="/images/apply-wiser-nav-bar-icon-2.png"
						alt="apply wiser"
						className="w-full h-full object-cover"
					/>
				</div>
			) : (
				<div className="flex items-center justify-center w-50 h-10 relative top-[5px] right-[35px]">
					<img
						src="/images/apply-wiser-logo-2.png"
						alt="apply wiser"
						className="w-full h-full object-cover"
					/>
				</div>
			)}
		</Link>
	);
};

export default NavBarIcon;
