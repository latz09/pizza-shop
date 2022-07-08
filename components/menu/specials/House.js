import { houseToppings } from '../../../public/src/toppings';
import SpecialHeading from '../../utils/SpecialHeading';
import Crusts from '../Crusts';
import ToppingsList from '../ToppingsList';

const House = () => {
	return (
		<>
			<SpecialHeading title={'HOUSE'} />
			<ToppingsList toppings={houseToppings} />
			<Crusts small={'$13'} medium={'$15'} large={'$19'} />
		</>
	);
};

export default House;
