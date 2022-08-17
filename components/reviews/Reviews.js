import { reviews } from '../../data/reviews';
import ReviewItem from './ReviewItem';

const Reviews = () => {
	return (
		<>
		
			<div className='max-w-7xl mx-auto grid gap-4 md:grid-cols-2 md:justify-evenly md:items-center p-4'>
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
