import MenuHeading from '../../utils/MenuHeading';
import Burger from './Burger';
import PizzaSandwich from './PizzaSandwich';

const Sandwiches = () => {
	return (
		<div className="grid lg:grid-cols-2 max-w-4xl mx-auto place-items-center gap-16 lg:gap-8 py-8 lg:py-16">
			<div className="grid gap-2 place-items-center">
				<MenuHeading title={'Cheese Burger'} />
				<Burger />
			</div>
			<div className="grid gap-2 place-items-center lg:place-items-end">
				<MenuHeading title={'Pizza Sandwich'} />
				<PizzaSandwich />
			</div>
		</div>
	);
};

export default Sandwiches;
