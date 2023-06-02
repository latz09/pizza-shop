import Image from 'next/image';
import hero from '../../public/images/party.jpg';
import Reviews from '../reviews/Reviews';

const ReviewsHero = () => {
	return (
		<div className='grid lg:grid-cols-5 gap-8 lg:gap-4 max-w-7xl mx-auto place-items-center'>
			<div className='lg:col-span-3 grid gap-4 order-2 lg:order-1 min-h-[500px] '> 
				<Reviews />
				
			</div>
			<div className='lg:col-span-2 order-1 lg:order-2'>
				<Image
					src={hero}
					alt='hero'
					className='grid place-items-center  shadow-lg '
				/>
			</div>
		</div>
	);
};

export default ReviewsHero;
