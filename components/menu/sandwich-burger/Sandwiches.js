import MenuHeading from '../../utils/MenuHeading';
import Burger from './Burger';
import PizzaSandwich from './PizzaSandwich';

const Sandwiches = () => {
	return (
		<div className="grid gap-12  md:flex md:justify-between md:items-center mt-7">
			<div>
				<MenuHeading title={'Cheese Burger'} />
				<Burger />
			</div>
			<div>
				<MenuHeading title={'Pizza Sandwich'} />
				<PizzaSandwich />
			</div>
		</div>
	);
};

export default Sandwiches;
