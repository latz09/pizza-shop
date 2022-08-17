import Image from 'next/image';
import hero from '../../public/images/cars-outside.webp';
import Reviews from '../reviews/Reviews';

const ReviewsHero = () => {
	return (
		<div className='relative w-[100vw] h-[80vh] md:h-[60vh] mx-auto'>
			<div className='-z-10'>
				<Image
					src={hero}
					alt=''
					layout='fill'
					objectFit='cover'
					objectPosition='left'
					priority='true'
				/>
			</div>
			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-60'>
				<Reviews />
			</div>
		</div>
	);
};

export default ReviewsHero;
