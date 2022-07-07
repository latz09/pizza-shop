import Hero from '../components/Hero';
import NavLink from '../components/utils/NavLink';

const Home = () => {
	return (
		<div className='h-screen bg-gradient-to-br from-[#E4E0DD] to-[#EBEBEB] mt-7 md:mt-20'>
			<div className='grid gap-8 justify-items-center'>
				<Hero />
				<NavLink href={'/menu'} title={'Menu'} style={'btn-menu'} />
			</div>
		</div>
	);
};

export default Home;
