import { BsFillHouseFill, BsFillTelephoneFill } from 'react-icons/bs';

import Link from 'next/link';
import NavLink from '../utils/NavLink';

const Navbar = () => {
	return (
		<div className='bg-gray-50'>
			<div className=' px-5 py-2 flex justify-between items-center max-w-7xl mx-auto'>
				<div className='font-logo tracking-wider text-xl md:text-3xl text-pizzaRed-500 hover:opacity-70 cursor-pointer transition duration-700'>
					<Link href={'/'}>
						<div className='flex space-x-2 items-center'>
							<BsFillHouseFill />
							<span>The Pizza Shop</span>
						</div>
					</Link>
				</div>
				<div className='text-gray-700 md:text-xl flex space-x-2 items-center'>
					<span className='text-pizzaRed-300'>
						<BsFillTelephoneFill />{' '}
					</span>
					<span>{`(651) 457-0777`}</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
