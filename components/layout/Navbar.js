import Link from 'next/link';
import NavLink from '../utils/NavLink';

const Navbar = () => {
	return (
		<div className='bg-gray-50'>
			<div className=' px-5 py-2 flex justify-between items-center max-w-7xl mx-auto'>
				<div className='font-logo tracking-wider text-xl md:text-3xl text-pizzaRed-500 hover:opacity-80 cursor-pointer transition duration-700'>
					<Link href={'/'}>
						<span>The Pizza Shop</span>
					</Link>
				</div>
				<div>
					<NavLink title='Menu' href={'/menu'} />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
