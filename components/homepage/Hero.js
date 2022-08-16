import Image from 'next/image';
import building from '../../public/images/building-at-sunset.png';
import logo from '../../public/images/logo_with_number.jpg';
import NavLink from '../utils/NavLink';

const Hero = () => {
	return (
		<div className='relative w-[100vw] h-[75vh]'>
			<div className='-z-10'>
				<Image
					src={building}
					alt=''
					layout='fill'
					objectFit='cover'
					objectPosition='center'
				/>
			</div>
			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-60'>
				<div className='grid gap-4 text-center tracking-widest text-gray-200'>
					<h1 className='text-5xl md:text-7xl text-white font-bold'>The Pizza Shop</h1>
					<div className="grid gap-3 text-xl font-bold">
						<p className=''>1037 Dodd Rd</p>
						<h1 className='text-pizzaRed-300 font-bold text-4xl md:text-5xl '>
							West Saint Paul
						</h1>
						<p className=''>{`(651) 457-0777`}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;

// <div className='xl:bg-black'>
// <div className='relative grid justify-center max-w-7xl mx-auto'>
// 	<div className='z-0 '>
// 		<Image
// 			src={building}
// 			alt='West Saint Paul Pizza Shop Logo'
// 			layout=''
// 			priority='true'
// 		/>
// 	</div>
// 	<div className='absolute inset-5 z-10 grid place-items-end'>
// 		<div className='text-white text-lg md:text-4xl tracking-widest bg-black bg-opacity-70 px-3 md:py-2 rounded grid justify-items-center md:gap-2  font-logo'>
// 			<p className=''>1037 Dodd Rd,</p>
// 			<h1 className='text-pizzaRed-300 text-xl md:text-5xl '>
// 				West Saint Paul
// 			</h1>
// 			<p className='text-sm md:text-lg'>{`(651) 457-0777`}</p>
// 		</div>
// 	</div>
// </div>
// </div>
