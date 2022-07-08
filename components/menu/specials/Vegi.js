import { vegiToppings } from '../../../public/src/toppings';
import SpecialHeading from '../../utils/SpecialHeading';
import Crusts from '../Crusts';
import ToppingsList from '../ToppingsList';

const Vegi = () => {
	return (
		<>
			{' '}
			<SpecialHeading title={'Vegi'} />
			<ToppingsList toppings={vegiToppings} />{' '}
			<Crusts small={'$12'} medium={'$14'} large={'$16'} />
		</>
	);
};

export default Vegi;
