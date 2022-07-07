import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<main className="px-4">{children}</main>
		</>
	);
};

export default Layout;
