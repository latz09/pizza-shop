import { houseToppings } from '../../../public/src/toppings';
import SpecialHeading from '../../utils/SpecialHeading';
import Crusts from '../Crusts';
import SpecialToppingList from './SpecialToppingList';

const House = () => {
	return (
		<div className='grid gap-4'>
			{' '}
			<SpecialHeading title={'HOUSE'} />
			<div className='mx-2 grid gap-4 text-primary'>
				<Crusts small={'$13'} medium={'$15'} large={'$19'} />
				<SpecialToppingList toppings={houseToppings} />{' '}
			</div>
		</div>
	);
};

export default House;

//make a specials toppings components that maps through, different styling
