import MenuHeading from '../utils/MenuHeading';

const HoursLocation = () => {
	return (
		<>
			<MenuHeading title={'Hours'} />
			<div className='grid gap-2 items-center justify-items-center'>
				<span className='text-gray-800 font-bold'>Monday - Friday</span>
				<span className='text-pizzaRed-600'>4:30PM - 10PM</span>
				<span className='text-gray-800 font-bold'>Saturday</span>
				<span className='text-pizzaRed-600'>4PM - 10PM</span>
				<span className='text-gray-800 font-bold'>Sunday</span>
				<span className='text-pizzaRed-600'>4PM - 10PM</span>
			</div>
		</>
	);
};

export default HoursLocation;
