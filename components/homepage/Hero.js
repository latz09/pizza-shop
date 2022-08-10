import Image from 'next/image';
import building from '../../public/images/building-at-sunset.png';
import logo from '../../public/images/logo_with_number.jpg';
import NavLink from '../utils/NavLink';

const Hero = () => {
	return (
		<div className='xl:bg-black'>
			<div className='relative grid justify-center max-w-7xl mx-auto'>
				<div className='z-0 '>
					<Image
						src={building}
						alt='West Saint Paul Pizza Shop Logo'
						layout=''
						priority='true'
					/>
				</div>
				<div className='absolute inset-5 z-10 grid place-items-end'>
					<div className='text-white text-lg md:text-4xl tracking-widest bg-black bg-opacity-70 px-3 md:py-2 rounded grid justify-items-center md:gap-2  font-logo'>
						<p className=''>1037 Dodd Rd,</p>
						<h1 className='text-pizzaRed-300 text-xl md:text-5xl '>
							West Saint Paul
						</h1>
						<p className='text-sm md:text-lg'>{`(651) 457-0777`}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
{
	/* <Image src={logo} alt='' height={200} width={340}/> */
}
