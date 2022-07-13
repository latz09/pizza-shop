import NavLink from '../utils/NavLink';

const Navbar = () => {
	return (
		<div className='bg-pizzaRed-500 text-xl text-gray-50 px-5 py-2 flex justify-between items-center'>
			<section className='font-logo tracking-wider text-xl md:text-3xl'>
				<NavLink
					title={'The Pizza Shop'}
					href={'/'}
					style={'hover:opacity-70'}
				/>
			</section>
			{/* <div className='flex justify-evenly space-x-5'>
				<NavLink 
					title={'Menu'} 
					href={'/menu'} 
					style={'hover:opacity-70'} 
				/>
				<NavLink
					title={'Hours-location'}
					href={'/location'}
					style={'hover:opacity-70'}
				/>{' '}
			</div> */}
		</div>
	);
};

export default Navbar;
