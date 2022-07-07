import NavLink from '../utils/NavLink';

const Navbar = () => {
	return (
		<div className='bg-[#A61118] text-xl text-gray-50 p-5 flex justify-between items-center'>
			<section className='font-logo tracking-wider text-3xl'>
				<NavLink title={'The Pizza Shop'} href={'/'} />
			</section>
			<div className='flex justify-evenly space-x-5'>
				<NavLink title={'Menu'} href={'/menu'} />
				<NavLink title={'Hours-location'} href={'/location'} />{' '}
			</div>
		</div>
	);
};

export default Navbar;
