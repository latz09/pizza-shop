import Link from 'next/link';

const NavLink = ({ href, title }) => {
	return (
		<div>
			<Link href={href}>
				<div className='hover:bg-opacity-70 transition duration-500 cursor-pointer bg-pizzaRed-400 text-white text-lg px-10 py-2'>{title}</div>
			</Link>
		</div>
	);
};

export default NavLink;
