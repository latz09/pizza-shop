import Link from 'next/link';

const NavLink = ({ href, title, style }) => {
	return (
		<div className={`hover:opacity-70 transition duration-500 ${style}`}>
			<Link href={href}>{title}</Link>
		</div>
	);
};

export default NavLink;
