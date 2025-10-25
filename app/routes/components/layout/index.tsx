// app\routes\components\layout\index.tsx
import { Outlet } from 'react-router';
import AuthLoader from '../auth_loader';

const PrivateLayout = () => {
	return (
		<AuthLoader>
			<Outlet />
		</AuthLoader>
	);
};

export default PrivateLayout;
