import About from '../components/about/About';
import FrozenPizzaAdd from '../components/frozen/FrozenPizzaAd';
import ReviewsHero from '../components/heros/ReviewsHero';
import Hero from '../components/homepage/Hero';
import HoursLocation from '../components/homepage/HoursLocation';


const Home = () => {
	return (
		<div className='grid '>
			<Hero />

			<About />

			<ReviewsHero />

			<div>
				<h1 className='text-center text-5xl md:text-6xl text-pizzaRed-400 font-logo tracking-wider m-4'></h1>
			</div>
			<div className=''>
				<HoursLocation />
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
