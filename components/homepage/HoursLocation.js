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
					<a className=' text-2xl bg-secondary py-2 px-6 rounded-sm w-full text-light'>
						Menu
					</a>
				</Link>
			</div>
		</>
	);
};

export default HoursLocation;
