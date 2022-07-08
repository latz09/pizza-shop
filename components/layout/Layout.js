import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<>
			<div className='sticky top-0 z-50'>
				<Navbar className='sticky top-0 z-50'/>
			</div>
			<main>{children}</main>
		</>
	);
};

export default Layout;
