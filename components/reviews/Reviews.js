import { reviews } from '../../data/reviews';
import ReviewItem from './ReviewItem';

const Reviews = () => {
	return (
		<>
		
			<div className=' grid gap-8 lg:gap-2 px-4 py-8'>
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
