import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<>
			<div className='sticky top-0 z-50'>
				<Navbar />
			</div>
			<main>{children}</main>
			<div className='w-full h-8 bg-pizzaRed-500'>
				
			</div>
		</>
	);
};

export default Layout;
