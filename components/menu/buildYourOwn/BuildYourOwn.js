import { allToppings } from '../../../public/src/toppings';
import MenuHeading from '../../utils/MenuHeading';
import MenuSection from '../../utils/MenuSection';
import Crusts from '../Crusts';
import ToppingsList from './ToppingsList';
import Pricing from './Pricing';

const BuildYourOwn = () => {
	return ( 
		<div className='grid gap-4 sm:mt-7'>
			<MenuHeading title={'Build Your Own'}/>
			<MenuSection title={'Toppings'} />
			<ToppingsList toppings={allToppings} />
			<MenuSection title={'Crust'} />
			<Crusts small={`10"`} medium={`12"`} large={`14"`} />
			<MenuSection title={'Pricing'} />
			<Pricing />
		</div>
	); 
};

export default BuildYourOwn;
