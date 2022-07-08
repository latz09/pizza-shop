import { vegiToppings } from '../../../public/src/toppings';
import SpecialHeading from '../../utils/SpecialHeading';
import Crusts from '../Crusts';
import SpecialToppingList from './SpecialToppingList';

const Vegi = () => {
	return (
		<>
			{' '}
			<SpecialHeading title={'Vegi'} />
			<Crusts small={'$12'} medium={'$14'} large={'$16'} />
			<SpecialToppingList toppings={vegiToppings} />{' '}
		</>
	);
};

export default Vegi;
