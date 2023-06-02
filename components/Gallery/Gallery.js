import img1 from '../../public/images/pizza.jpg';
import img2 from '../../public/images/cars-outside.webp';
import img3 from '../../public/images/old-vehicle.jpg';
import img4 from '../../public/images/frozen-pizza.jpg';
import Image from 'next/image';

const Gallery = () => {
	return (
		<div className='grid lg:grid-cols-2 max-w-7xl mx-auto gap-16 py-16 place-items-center'>
			<div className='gallery-img'>
				<Image src={img3} alt='' />
			</div>
			<div className='gallery-img '>
				<Image src={img1} alt='' />
			</div>

			<div className='gallery-img  '>
				<Image src={img4} alt='' />
			</div>
			<div className=' gallery-img'>
				<Image src={img2} alt='' />
			</div>
		</div>
	);
};

export default Gallery;
