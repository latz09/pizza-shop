import img1 from '../../public/images/pizza.jpg';
import img2 from '../../public/images/cars-outside.webp';
import img3 from '../../public/images/old-vehicle.jpg';
import img4 from '../../public/images/frozen-pizza.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Gallery = () => {
	return (
		<div className='grid lg:grid-cols-2 max-w-7xl mx-auto gap-16 py-16 place-items-center'>
			<motion.div
				initial={{ scale: 1 }}
				animate={{ scale: 1.12 }}
				transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
				className=' gallery-img'
			>
				<Image src={img3} alt='' />
			</motion.div>
			<motion.div
				initial={{ scale: 1 }}
				animate={{ scale: 1.12 }}
				transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
				className=' gallery-img'
			>
				<Image src={img1} alt='' />
			</motion.div>

			<motion.div
				initial={{ scale: 1 }}
				animate={{ scale: 1.12 }}
				transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
				className=' gallery-img'
			>
				<Image src={img4} alt='' />
			</motion.div>

			<motion.div
				initial={{ scale: 1 }}
				animate={{ scale: 1.12 }}
				transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
				className=' gallery-img'
			>
				<Image src={img2} alt='' />
			</motion.div>
		</div>
	);
};

export default Gallery;
