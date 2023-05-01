import Image from 'next/image';
import hero from '../../public/images/pizza.jpg';
import MenuToggle from '../utils/MenuToggle';

const MenuHero = ({ menuCategory, setMenuCategory }) => {
	return (
		<div className='relative  h-[33vh] lg:h-[45vh]'>
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
			<div className='relative grid justify-center h-full bg-gradient-to-t from-dark via-dark/30 to-dark/0 '>
				<div className='grid gap-4 text-center tracking-widest self-end'>
					<h1 className='text-5xl md:text-7xl text-white font-bold tracking-widest'>
						{/* MENU */}
					</h1>
				</div>
				<div className=' self-end mb-2 '>
					<MenuToggle
						menuCategory={menuCategory}
						setMenuCategory={setMenuCategory}
					/>
				</div>
			</div>
		</div>
	);
};

export default MenuHero;
