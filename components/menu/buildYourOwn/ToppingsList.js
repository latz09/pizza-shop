import ToppingItem from './ToppingItem';

const ToppingsList = ({ toppings }) => {
	return (
		<ul className='grid grid-cols-3 text-xs sm:gap-1 sm:text-lg justify-items-center text-pizzaRed-600 shadow p-3 '>
			{toppings.map((topping) => (
				<ToppingItem key={topping} item={topping} />
			))}
		</ul>
	);
};

export default ToppingsList;
