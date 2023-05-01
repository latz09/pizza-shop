import { BsFillHouseFill, BsFillTelephoneFill } from 'react-icons/bs';

import Link from 'next/link';
import NavLink from '../utils/NavLink';

const Navbar = () => {
	return (
		<div className='border-b border-secondary/50 shadow-md bg-light/80'>
			<div className=' py-3 lg:py-4 px-2 xl:px-0 flex justify-between items-center max-w-5xl mx-auto '>
				<div className='tracking-wider text-lg md:text-xl  hover:opacity-70 cursor-pointer transition duration-700'>
					<Link href={'/'}>
						<div className='flex space-x-2 items-center text-primary'>
							<span className="text-secondary opacity-70">
							<BsFillHouseFill /></span>
							<span>The Pizza Shop</span>
						</div>
					</Link>
				</div>
				<div className=' flex space-x-4 items-center text-primary'>
					<span className='text-secondary'>
						<BsFillTelephoneFill />{' '}
					</span>
					<span className="text-xl lg:text-2xl font-semibold">{`(651) 457-0777`}</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
