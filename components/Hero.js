import Image from 'next/image';
import logo from '../public/images/logo_with_number.jpg';

const Hero = () => {
	return <Image src={logo} alt='West Saint Paul Pizza Shop Logo' />;
};

export default Hero;
