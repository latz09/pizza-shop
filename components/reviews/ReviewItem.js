import { AiFillStar } from 'react-icons/ai';

const ReviewItem = ({ name, text }) => {
	return (
		<div className='grid gap-2 text-gray-200 tracking-wide   bg-pizzaRed-500 p-4 shadow shadow-pizzaRed-400 '>
			<h1 className='font-bold text-xl text-white'>{name}</h1>
			<span className='text-yellow-400 flex space-x-2 md:text-base'>
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
			</span>

			<p className=' tracking-widest leading-6 italic'>{`"${text}"`}</p>
		</div>
	);
};

export default ReviewItem;
