const ToppingItem = ({ item }) => {
	return (
		<li className='font-bold py-2 px-2 sm:shadow sm:hover:shadow-lg transition duration-300'>
			{item}
		</li>
	);
};

export default ToppingItem;
