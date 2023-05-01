import About from '../components/about/About';

import Gallery from '../components/Gallery/Gallery';
import ReviewsHero from '../components/heros/ReviewsHero';
import Hero from '../components/homepage/Hero';

const Home = () => {
	return (
		<div className='grid gap-12 md:gap-24 mb-16 '>
			<div className="mb-12 lg:mb-24" >
				<Hero />
				<About />
			</div>
			<ReviewsHero />
			<Gallery />
		</div>
	);
};

export default Home;
