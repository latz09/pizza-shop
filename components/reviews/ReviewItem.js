import { AiFillStar } from 'react-icons/ai';

const ReviewItem = ({ name, text }) => {
	return (
		<div className='grid gap-4  '>
			<h1 className='font-bol text-xl text-primary scale-y-150 font-oswald	'>{name}</h1>
			<span className=' flex space-x-2 md:text-base text-secondary'>
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
			</span>

			<p className=' tracking-wider leading-7 pr-2  font-oswald'>{`"${text}"`}</p>
		</div>
	);
};

export default ReviewItem;
