import { BsFillHouseFill, BsFillTelephoneFill } from 'react-icons/bs';

import Link from 'next/link';
import NavLink from '../utils/NavLink';

const Navbar = () => {
	return (
		<div className=' shadow-md bg-light h-[10vh] grid place-items-center'>
			<div className='  px-2 xl:px-0 flex justify-between items-center max-w-5xl mx-auto w-full'>
				<div className='tracking-wider  hover:opacity-70 cursor-pointer transition duration-700'>
					<Link href={'/'}>
						<div className="text-primary scale-y-150 text-xl">The Pizza Shop</div>
					</Link>
				</div>
				
					<div className='text-xl lg:text-2xl font-semibold  text-primary scale-y-125'>{`(651) 457-0777`}</div>
				
			</div>
		</div>
	);
};

export default Navbar;
