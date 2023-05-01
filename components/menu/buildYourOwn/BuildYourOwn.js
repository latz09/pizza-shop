import { allToppings } from '../../../public/src/toppings';
import MenuHeading from '../../utils/MenuHeading';
import MenuSection from '../../utils/MenuSection';
import Crusts from '../Crusts';
import ToppingsList from './ToppingsList';
import Pricing from './Pricing';

const BuildYourOwn = () => {
	return (
		<div className='build-your-own'>
			<MenuHeading title={'Build Your Own'} />
			<div>
				<MenuSection title={'Toppings'} />
				<ToppingsList toppings={allToppings} />
			</div>
			<div className='grid place-items-center'>
				<MenuSection title={'Crust'} />

				<Crusts small={`10"`} medium={`12"`} large={`14"`} />
			</div>
			<div
				className='grid max-w-7l x-auto'
			>
				<MenuSection title={'Pricing'} />
				<Pricing />
			</div>
		</div>
	);
};

export default BuildYourOwn;
