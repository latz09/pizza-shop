import About from '../components/about/About';

import Gallery from '../components/Gallery/Gallery';
import ReviewsHero from '../components/heros/ReviewsHero';
import Hero from '../components/homepage/Hero';

const Home = () => {
	return (
		<div className='grid gap-12 md:gap-24 mb-16 '>
			<div className=''>
				<Hero />
				<About />
			</div>

			<div className="grid gap-16">
				<div className="text-center font-oswald text-xl lg:text-3xl scale-y-150 text-secondary tracking-wider ">Community Notes . . .</div>
				<ReviewsHero />
			</div>
			<Gallery />
		</div>
	);
};

export default Home;
