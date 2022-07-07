import { allToppings } from '../../../public/src/toppings';
import MenuSection from '../../utils/MenuSection';
import Crusts from '../Crusts';
import ToppingsList from '../ToppingsList';
import Pricing from './Pricing';

const Custom = () => {
	return (
		<div className='text-pizzaRed-600 grid gap-4 sm:mt-7'>
			<MenuSection title={'Toppings'} />
			<ToppingsList toppings={allToppings} />
			<MenuSection title={'Crust'} />
			<Crusts small={`10"`} medium={`12"`} large={`14"`} />
			<MenuSection title={'Pricing'} />
			<Pricing />
		</div>
	);
};

export default Custom;
