import HoursLocation from '../homepage/HoursLocation';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className='flex flex-col bg-light text-dark font-oswald'>
			<div className='sticky top-0 z-50'>
				<Navbar />
			</div>
			<main className='flex-grow min-h-screen'>{children}</main>
			<div className=" grid gap-4">
				<HoursLocation />
				<div className="h-4 bg-primary mt-24 "></div>
			</div>
		</div>
	);
};

export default Layout;
