const Pricing = () => {
	return (
		<table className='text-lg md:text-xl font-questrial lg:w-2/3 lg:mx-auto'>
			<tbody className=" ">
				<tr className="text-primary ">
					<th>Toppings</th>
					<th>Small</th>
					<th>Medium</th>
					<th>Large</th>
				</tr>
				<tr className='text-secondary'>
					<td>Cheese Only</td>
					<td>$10</td>
					<td>$12</td>
					<td>$14</td>
				</tr>
				<tr className='text-primary'>
					<td>1-2 toppings</td>
					<td>$11</td>
					<td>$14</td>
					<td>$16</td>
				</tr>
				<tr className='text-secondary'>
					<td>3-4 toppings</td>
					<td>$14</td>
					<td>$16</td>
					<td>$18</td>
				</tr>
				<tr className='text-primary'>
					<td>5-6 toppings</td>
					<td>$16</td>
					<td>$18</td>
					<td>$20</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Pricing;
