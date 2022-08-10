import About from '../components/about/About';
import Hero from '../components/homepage/Hero';
import HoursLocation from '../components/homepage/HoursLocation';
import CallToOrder from '../components/utils/CallToOrder';
import NavLink from '../components/utils/NavLink';

const Home = () => {
	return (
		<div className='grid '>
			<div>
				<Hero />
			</div>
			<div>
				<About />
			</div>
			
		</div>
	);
};

export default Home;

{
	/* <div className='grid h-screen bg-gray-100 '>
		// 	<div className='grid content-center  md:grid-cols-3 gap-8 md:justify-items-center md:items-center '>
		// 		<div className='md:col-span-2'>
		// 			<Hero />
		// 		</div>
		// 		<div className='xl:justify-self-start grid gap-5'>
		// 			<span className='grid justify-center'>
		// 				<NavLink href={'/menu'} title={'Menu'} style={'btn-menu'} />
		// 			</span>
		// 			<HoursLocation />
		// 		</div> 
		// 	</div>
		// </div> */
}
