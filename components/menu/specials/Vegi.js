import { vegiToppings } from '../../../public/src/toppings';
import SpecialHeading from '../../utils/SpecialHeading';
import Crusts from '../Crusts';
import SpecialToppingList from './SpecialToppingList';

const Vegi = () => {
	return (
		<div className='grid gap-4'>
			{' '}
			<SpecialHeading title={'Vegi'} />
			<div className='mx-2 grid gap-1 text-primary'>
				<Crusts small={'$12'} medium={'$14'} large={'$16'} />
				<SpecialToppingList toppings={vegiToppings} />{' '}
			</div>
		</div>
	);
};

export default Vegi;
