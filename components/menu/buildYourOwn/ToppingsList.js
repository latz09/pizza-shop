import ToppingItem from './ToppingItem';

const ToppingsList = ({ toppings }) => {
	return (
		<ul className='flex flex-wrap space-x-4 sm:gap-1 text sm:text-lg items-ceter justify-center  justify-items-cener    max-w-5xl mx-auto text-primary'>
			{toppings.map((topping) => (
				<ToppingItem key={topping} item={topping} />
			))}
		</ul>
	);
};

export default ToppingsList;
