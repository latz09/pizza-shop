const CallToOrder = () => {
	return (
		<div className='mt-12 grid gap-2 justify-items-center bg-pizzaRed-500 text-white py-2  tracking-wide shadow-lg'>
			<div className='text-xl md:text-3xl text-white'>
				To order please call:
			</div>
			<div className=' md:text-xl '>{`(651) 457-0777`}</div>
		</div>
	);
};

export default CallToOrder;
