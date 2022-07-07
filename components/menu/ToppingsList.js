import ToppingItem from './buildYourOwn/ToppingItem';

const ToppingsList = ({ toppings }) => {
	return (
		<ul className='grid grid-cols-3 text-xs sm:gap-4 sm:text-lg items-center'>
			{toppings.map((topping) => (
				<ToppingItem key={topping} item={topping} />
			))}
		</ul>
	);
};

export default ToppingsList;
