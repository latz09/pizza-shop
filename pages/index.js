import Hero from '../components/Hero';
import NavLink from '../components/utils/NavLink';

const Home = () => {
	return (
		<div className='bg-gradient-to-br h-screen from-[#E4E0DD] to-[#EBEBEB] flex justify-center items-center'>
			<div className='grid gap-8 justify-items-center lg:flex justify-evenly items-center content-center  mx-auto mb-28'>
				<Hero />
				<div>
					<NavLink href={'/menu'} title={'Menu'} style={'btn-menu'} />
					<div className="text-center">Hours</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
