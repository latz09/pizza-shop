import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<>
			<div className='sticky top-0 z-50'>
				<Navbar />
			</div>
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
