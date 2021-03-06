import ToppingItem from "../buildYourOwn/ToppingItem";

const SpecialToppingList = ({toppings}) => {
	return (
		<ul className='flex flex-wrap justify-center text-pizzaRed-300 text-xs gap-2 sm:gap-4 sm:text-lg items-center py-4 px-5'>
			{toppings.map((topping) => (
				<ToppingItem key={topping} item={topping} />
			))}
		</ul>
	);
};

export default SpecialToppingList;
