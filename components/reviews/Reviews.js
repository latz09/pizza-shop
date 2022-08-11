import { reviews } from '../../data/reviews';
import ReviewItem from './ReviewItem';

const Reviews = () => {
	return (
		<>
			<h1 className='text-center text-5xl md:text-6xl text-pizzaRed-400 font-logo tracking-wider mt-4'>
				Why us...
			</h1>
			<div className='max-w-7xl mx-auto grid justify-center gap-4 md:grid-cols-2 md:justify-evenly md:items-center py-20'>
				{reviews.map((review) => (
					<div key={review.name} className=''>
						<ReviewItem name={review.name} text={review.review} />
					</div>
				))}
			</div>
		</>
	);
};

export default Reviews;
