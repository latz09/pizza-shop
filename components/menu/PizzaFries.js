import Image from 'next/image';
import MenuHeading from '../utils/MenuHeading';
import Crusts from './Crusts';
import chzfry from '../../public/images/pizzaFries.png';

const PizzaFries = () => {
	return (
		<div className='grid gap-8 place-items-center max-w-4xl mx-auto '>
			<MenuHeading title={'Pizza Fries'} />
			<div className='grid gap-16 lg:gap-0 lg:grid-cols-2 place-items-center'>
				<Crusts small={'$10'} medium={'$12'} large={'$14'} />
				<div className='shadow-lg grid place-items-center rounded-lg w-4/5 lg:w-full'>
					<Image src={chzfry} alt='Cheese Fries' className='rounded-lg' />
				</div>
			</div>
		</div>
	);
};

export default PizzaFries;
