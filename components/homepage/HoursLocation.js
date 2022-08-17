import Link from 'next/link';
import MenuHeading from '../utils/MenuHeading';

const HoursLocation = () => {
	return (
		<>
			{' '}
			<div className='grid gap-1  md:gap-5 items-center justify-items-center text-xl md:text-2xl my-8'>
				<div className='grid justify-items-center gap-2'>
					<span className='text-gray-600 font-logo tracking-wider '>
						Monday - Friday
					</span>
					<span className='text-pizzaRed-400'>4:30PM - 10PM</span>
				</div>
				<div className='grid justify-items-center gap-2'>
					<span className='text-gray-600 font-logo tracking-wider '>{`Saturday & Sunday`}</span>
					<span className='text-pizzaRed-400'>4PM - 10PM</span>
				</div>
			</div>
			<div className="text-center">
				<Link href={'/menu'}>
					<a className='p-3 bg-pizzaRed-300 text-2xl text-white hover:bg-opacity-75 transition duration-700'>
						Menu
					</a>
				</Link>
			</div>
		</>
	);
};

export default HoursLocation;
