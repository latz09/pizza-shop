import Image from 'next/image';
import hero from '../../public/images/pizza.jpg';

const MenuHero = () => {
	return (
		<div className='relative w-[100vw] h-[30vh] lg:h-[50vh]'>
			<div className='-z-10'>
				<Image
					src={hero}
					alt=''
					layout='fill'
					objectFit='cover'
					objectPosition='center'
					priority='true'
				/>
			</div>
			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-40'>
				<div className='grid gap-4 text-center tracking-widest text-gray-200'>
					<h1 className='text-5xl md:text-7xl text-white font-bold tracking-widest'>
						MENU
					</h1>
				</div>
			</div>
		</div>
	);
};

export default MenuHero;
