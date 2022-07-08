const Crusts = ({ small, medium, large }) => {
	return (
		<table className='text-sm sm:text-xl'>
			<tr>
				<th>Small</th>
				<th>Medium</th>
				<th>Large</th>
			</tr>
			<tr className="text-pizzaRed-600">
				<td>{small}</td>
				<td>{medium}</td>
				<td>{large}</td>
			</tr>
		</table>
	);
};

export default Crusts;
