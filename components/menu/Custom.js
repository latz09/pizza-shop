import { toppings } from '../../public/src/toppings';
import ToppingItem from './ToppingItem';

const Custom = () => {
	return (
		<div className='text-pizzaRed-600 grid gap-4 sm:mt-7'>
			<h1 className='text-lg sm:text-3xl pt-2'>Toppings</h1>
			<ul className='grid grid-cols-3 text-xs sm:gap-4 sm:text-lg items-center'>
				{toppings.map((topping) => (
					<ToppingItem key={topping} item={topping} />
				))}
			</ul>
		</div>
	);
};

export default Custom;
