import { useState } from 'react';
import { reviews } from '../../data/reviews';
import ReviewItem from './ReviewItem';

const Reviews = () => {
    const [reviewIndex, setReviewIndex] = useState(0); // start by showing the first 2 reviews

    const handleClick = () => {
        // When clicking "More Reviews...", increment the review index by 2
        // When reaching the end of the array, go back to the start
        setReviewIndex((reviewIndex + 2) % reviews.length);
    };

    return (
        <div className="flex flex-col justify-between">
            <div className=' grid gap-8 lg:gap-2 px-4 py-8'>
                {reviews.slice(reviewIndex, reviewIndex + 2).map((review) => (
                    <div key={review.name} className=''>
                        <ReviewItem name={review.name} text={review.review} />
                    </div>
                ))}
            </div>
            <button
                onClick={handleClick}
                className='text-center text-primary font-bold font-tinos text-2xl cursor-pointer'>
                More Reviews...
            </button>
        </div>
    );
};

export default Reviews;
