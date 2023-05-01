import { superToppings } from '../../../public/src/toppings';
import SpecialHeading from '../../utils/SpecialHeading';
import Crusts from '../Crusts';
import SpecialToppingList from './SpecialToppingList';

const Super = () => {
	return (
		<div className='grid gap-4'>
			{' '}
			<SpecialHeading title={'SUPER'} />
			<div className='mx-2 grid gap-1 text-primary'>
				<Crusts small={'$15'} medium={'$17'} large={'$20'} />
				<SpecialToppingList toppings={superToppings} />{' '}
			</div>
		</div>
	);
};

export default Super;
