import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';


const Footer = () => {
	return (
		<div className='bg-black py-8  border-t md:border-t-4 border-pizzaRed-500'>
			<div className='max-w-7xl mx-auto flex justify-center'>
				
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
