import Hero from '../components/homepage/Hero';
import HoursLocation from '../components/homepage/HoursLocation';
import NavLink from '../components/utils/NavLink';

const Home = () => {
	return (
		<div className='bg-gradient-to-br h-screen from-[#E4E0DD] to-[#EBEBEB] flex justify-center items-center'>
			<div className='grid gap-8 justify-items-center '>
				<Hero />

				<NavLink href={'/menu'} title={'Menu'} style={'btn-menu'} />

				<HoursLocation />
			</div>
		</div>
	);
};

export default Home;
