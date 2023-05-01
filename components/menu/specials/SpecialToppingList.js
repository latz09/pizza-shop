import ToppingItem from "../buildYourOwn/ToppingItem";

const SpecialToppingList = ({toppings}) => {
	return (
		<ul className=' flex flex-wrap text-xs gap-2 sm:gap-4 sm:text-lg '>
			{toppings.map((topping) => (
				<ToppingItem key={topping} item={topping} />
			))}
		</ul>
	);
};

export default SpecialToppingList;

