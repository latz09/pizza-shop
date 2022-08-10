import Image from 'next/image';
import cars from '../../public/images/cars-outside.webp';
import MenuHeading from '../utils/MenuHeading';

const About = () => {
	return (
		<>
			<div className="text-center mt-4">
				<MenuHeading title={'About us!'} />{' '}
			</div>
			<div className='max-w-7xl mx-auto grid gap-3 md:grid-cols-2 md:place-items-end justify-items-center'>
				<h1 className=' text-gray-600 tracking-wide md:text-xl  self-center px-5 text-center md:text-justify py-8'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis eu
					non diam phasellus. Et netus et malesuada fames ac turpis egestas.
					Odio eu feugiat pretium nibh ipsum consequat nisl. Tristique et
					egestas quis ipsum suspendisse ultrices.
				</h1>
				<div className=' md:p-7'>
					<Image src={cars} alt='' layout='intrinsic' />
				</div>
			</div>
		</>
	);
};

export default About;
