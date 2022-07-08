import { superToppings } from '../../../public/src/toppings';
import SpecialHeading from '../../utils/SpecialHeading';
import Crusts from '../Crusts';
import ToppingsList from '../ToppingsList';

const Super = () => {
	return (
		<>
			{' '}
			<SpecialHeading title={'SUPER'} />
            <Crusts small={'$15'} medium={'$17'} large={'$20'}/>
			<ToppingsList toppings={superToppings} />{' '}
		</>
	);
};

export default Super;
