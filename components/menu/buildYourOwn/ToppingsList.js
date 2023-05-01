import ToppingItem from './ToppingItem';

const ToppingsList = ({ toppings }) => {
	return (
		<ul className='flex flex-wrap space-x-4 text-xs sm:gap-1 sm:text-lg items-center justify-center  justify-items-center   max-w-5xl mx-auto text-primary'>
			{toppings.map((topping) => (
				<ToppingItem key={topping} item={topping} />
			))}
		</ul>
	);
};

export default ToppingsList;
