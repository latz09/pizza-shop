import Image from 'next/image';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from '../../public/images/logo_with_number.jpg';

const Footer = () => {
	return (
		<div className='bg-black py-4  border-t-4 border-pizzaRed-500'>
			<div className='max-w-7xl mx-auto grid grid-cols-2 justify-items-center items-center'>
				<div className="">
					<Image src={logo} alt='' height={100} width={200} />
				</div>
                <div className="text-white flex space-x-5 text-2xl cursor-pointer">
                    <BsFacebook />
                    <BsInstagram />
                    <BsTwitter />
                </div>
			</div>
		</div>
	);
};

export default Footer;
