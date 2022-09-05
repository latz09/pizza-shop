import ToppingItem from './ToppingItem';

const ToppingsList = ({ toppings }) => {
	return (
		<ul className='flex flex-wrap space-x-4 text-xs sm:gap-1 sm:text-lg items-center justify-center leading-6 justify-items-center text-pizzaRed-600 p-3 max-w-5xl mx-auto'>
			{toppings.map((topping) => (
				<ToppingItem key={topping} item={topping} />
			))}
		</ul>
	);
};

export default ToppingsList;
