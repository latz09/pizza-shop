const Crusts = ({ small, medium, large }) => {
	return (
		<div className='text-sm sm:text-xl flex space-x-7 justify-center'>
			<div className='grid'>
				<span className='font-bold'>Small</span>
				<span className='text-pizzaRed-600'>{small}</span>
			</div>
			<div className='grid'>
				<span className='font-bold'>Medium</span>
				<span className='text-pizzaRed-600'>{medium}</span>
			</div>
			<div className='grid'>
				<span className='font-bold'>Large</span>
				<span className='text-pizzaRed-600'>{large}</span>
			</div>
		</div>
	);
};

export default Crusts;
