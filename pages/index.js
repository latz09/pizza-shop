import About from '../components/about/About';

import Gallery from '../components/Gallery/Gallery';
import ReviewsHero from '../components/heros/ReviewsHero';
import Hero from '../components/homepage/Hero';


const Home = () => {
	return (
		<div className='grid gap-12 md:gap-24 mb-16 '>
			<Hero />
			<About />

			<ReviewsHero />
			<Gallery />
		
		</div>
	);
};

export default Home;
