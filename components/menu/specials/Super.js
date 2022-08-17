import { superToppings } from '../../../public/src/toppings';
import SpecialHeading from '../../utils/SpecialHeading';
import Crusts from '../Crusts';
import SpecialToppingList from './SpecialToppingList';

const Super = () => {
	return (
		<div>
			{' '}
			<SpecialHeading title={'SUPER'} />
            <Crusts small={'$15'} medium={'$17'} large={'$20'}/>
			<SpecialToppingList toppings={superToppings} />{' '}
		</div>
	);
};

export default Super;
