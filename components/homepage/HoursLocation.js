import MenuHeading from '../utils/MenuHeading';

const HoursLocation = () => {
	return (
		<>
			{' '}
			<div className='text-center'>
				<MenuHeading title={'Hours'} />
			</div>
			<div className='grid gap-1  md:gap-3 items-center justify-items-center text-xl md:text-2xl'>
				<div className='grid justify-items-center'>
					<span className='text-gray-800 font-semibold'>Monday - Friday</span>
					<span className='text-pizzaRed-600'>4:30PM - 10PM</span>
				</div>
				<div className='grid justify-items-center'>
					<span className='text-gray-800 font-semibold'>Saturday</span>
					<span className='text-pizzaRed-600'>4PM - 10PM</span>
				</div>
				<div className='grid justify-items-center'>
					<span className='text-gray-800 font-semibold'>Sunday</span>
					<span className='text-pizzaRed-600'>4PM - 10PM</span>
				</div>
			</div>
		</>
	);
};

export default HoursLocation;
