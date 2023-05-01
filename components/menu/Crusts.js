const Crusts = ({ small, medium, large }) => {
	return (
		<div className=' md:text-xl flex space-x-8 text-primary text-center '>
			<div className='grid'>
				<span className='font-semibold font-questrial tracking-wider text-secondary'>Small</span>
				<span >{small}</span>
			</div>
			<div className='grid'>
				<span className='font-semibold font-questrial tracking-wider text-secondary'>Medium</span>
				<span >{medium}</span>
			</div>
			<div className='grid'>
				<span className='font-semibold font-questrial tracking-wider text-secondary'>Large</span>
				<span >{large}</span>
			</div>
		</div>
	);
};

export default Crusts;
