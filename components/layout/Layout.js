import Image from 'next/image';
import HoursLocation from '../homepage/HoursLocation';
import Footer from './Footer';
import Navbar from './Navbar';
import logo from '../../public/images/logo.png';

const Layout = ({ children }) => {
	return (
		<div className='flex flex-col bg-light text-dark font-oswald'>
			<div className='sticky top-0 z-50'>
				<Navbar />
			</div>
			<main className='flex-grow min-h-screen'>{children}</main>
			<div className=' grid'>
				<HoursLocation />
				<div className="mt-24 md:w-1/2 mx-auto 2xl:w-1/3">
					<Image src={logo} alt='' />
				</div>
				<div className='h-4 bg-primary mt-24 '></div>
			</div>
		</div>
	);
};

export default Layout;
