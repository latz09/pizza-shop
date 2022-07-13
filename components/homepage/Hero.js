import Image from 'next/image';
import logo from '../../public/images/logo_with_number.jpg';

const Hero = () => {
	return (
		<div className="bg-pizzaRed-500 py-1 md:p-5 md:rounded-full md:border-2 border-black ">
			
			<Image
				src={logo}
				alt='West Saint Paul Pizza Shop Logo'
				layout='intrinsic'
				height={500}
				width={700}
			/>
			
		</div>
	);
};

export default Hero;
