import Link from 'next/link';

const NavLink = ({ href, title, style }) => {
	return (
		<Link href={href}>
			<div className={` transition duration-500 cursor-pointer ${style}`}>{title}</div>
		</Link>
	);
};

export default NavLink;
