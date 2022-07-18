import Image from 'next/image';
import logo from '../../public/images/logo_with_number.jpg';

const Hero = () => {
	return (
		<div className="bg-black py-1 md:p-2">
			<div className='bg-pizzaRed-500 md:p-2  md:border border-black '>
				<Image
					src={logo}
					alt='West Saint Paul Pizza Shop Logo'
					layout='intrinsic'
					height={500}
					width={700}
					priority='true'
				/>
			</div>
		</div>
	);
};

export default Hero;
