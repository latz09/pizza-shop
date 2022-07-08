import MenuHeading from '../../utils/MenuHeading';
import Burger from './Burger';
import PizzaSandwich from './PizzaSandwich';

const Sandwiches = () => {
	return (
		<>
			<MenuHeading title={'Sandwich & Burger'} />
			<Burger />
			<PizzaSandwich />
		</>
	);
};

export default Sandwiches;
