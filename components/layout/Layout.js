import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className="flex flex-col h-screen">
			<div className='sticky top-0 z-50'>
				<Navbar />
			</div>
			<main className="flex-grow">{children}</main>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
