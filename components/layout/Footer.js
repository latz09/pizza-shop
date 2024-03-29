import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import CallToOrder from '../utils/CallToOrder';

const Footer = () => {
	return (
		<>
			<CallToOrder />
			<div className=''>
				<div className='max-w-7xl mx-auto flex justify-center'>
					<div className='flex space-x-5 text-2xl cursor-pointer'>
						<BsFacebook />
						<BsInstagram />
						<BsTwitter />
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
