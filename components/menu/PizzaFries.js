
import MenuHeading from '../utils/MenuHeading';
import Crusts from './Crusts';

const PizzaFries = () => {
	return (
		<div className='my-7 space-y-4 '>
			<MenuHeading title={"Pizza Fries"} />
			<Crusts small={'$10'} medium={'$12'} large={'$14'} />
		</div>
	);
};

export default PizzaFries;
 