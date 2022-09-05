import ToppingItem from "../buildYourOwn/ToppingItem";

const SpecialToppingList = ({toppings}) => {
	return (
		<ul className=' text-pizzaRed-300 flex flex-wrap justify-center items-center text-xs gap-2 sm:gap-4 sm:text-lg py-4 px-5 border border-black'>
			{toppings.map((topping) => (
				<ToppingItem key={topping} item={topping} />
			))}
		</ul>
	);
};

export default SpecialToppingList;

