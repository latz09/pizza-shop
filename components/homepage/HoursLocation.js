import Link from 'next/link';

const HoursLocation = () => {
	return (
		<>
			{' '}
			<div className='grid gap-8   md:gap-5 items-center justify-items-center text-xl md:text-2xl py-8'>
				<div className='grid justify-items-center gap-2'>
					<span className=' tracking-wider text-primary '>
						Monday - Friday
					</span>
					<span className='opacity-80'>4:30PM - 10PM</span>
				</div>
				<div className='grid justify-items-center gap-2'>
					<span className='tracking-wider text-primary'>{`Saturday & Sunday`}</span>
					<span className='opacity-80'>4PM - 10PM</span>
				</div>
			</div>
			<div className="text-center">
				<Link href={'/menu'}>
				<a className=' text-xl  transition duration-700 bg-secondary px-4 py-3 rounded shadow-lg  font-questrial uppercase tracking-wider text-light'>
						Menu
					</a>
				</Link>
			</div>
		</>
	);
};

export default HoursLocation;
