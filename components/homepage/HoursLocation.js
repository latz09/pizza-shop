import MenuHeading from '../utils/MenuHeading';

const HoursLocation = () => {
	return (
		<>
			{' '}
			<div className='text-center my-8'>
				<MenuHeading title={'Hours'} />
			</div>
			<div className='grid gap-1  md:gap-5 items-center justify-items-center text-xl md:text-2xl'>
				<div className='grid justify-items-center gap-2'>
					<span className='text-gray-600 font-logo tracking-wider '>Monday - Friday</span>
					<span className='text-pizzaRed-400'>4:30PM - 10PM</span>
				</div>
				<div className='grid justify-items-center gap-2'>
					<span className='text-gray-600 font-logo tracking-wider '>{`Saturday & Sunday`}</span>
					<span className='text-pizzaRed-400'>4PM - 10PM</span>
				</div>
				
			</div>
		</>
	);
};

export default HoursLocation;
