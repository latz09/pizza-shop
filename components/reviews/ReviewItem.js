import { AiFillStar } from 'react-icons/ai';

const ReviewItem = ({ name, text }) => {
	return (
		<div className='grid gap-2  '>
			<h1 className='font-bold text-xl text-primary '>{name}</h1>
			<span className=' flex space-x-2 md:text-base text-secondary'>
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
			</span>

			<p className=' tracking-wide pl-4 pr-8 text-justify  font-questrial'>{`"${text}"`}</p>
		</div>
	);
};

export default ReviewItem;
