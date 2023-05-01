import Image from 'next/image';
import Link from 'next/link';
import building from '../../public/images/building-at-sunset.png';

const Hero = () => {
	return (
		<div className='relative h-[100vh]'>
			<div className='-z-10'>
				<Image
					src={building}
					alt=''
					layout='fill'
					objectFit='cover'
					objectPosition='center'
					priority='true'
				/>
			</div>
			<div className='relative flex justify-center items-center h-full bg-gradient-to-t from-dark/60 via-dark/50 to-dark/0 text-light'>
				<div className=' grid gap-6'>
					<h1 className='text-5xl md:text-7xl text-light scale-y-125'>The Pizza Shop</h1>
					<div className='grid gap-2 text-xl text-center opacity-95'>
						
						<h1 className=' font-light text-4xl md:text-5xl '>
							West Saint Paul
						</h1>
						<p className='font-bold'>1037 Dodd Rd</p>
						{/* <p className=''>{`(651) 457-0777`}</p> */}
					</div>
					<div className='grid w-full opacity-90 hover:opacity-100 hover:scale-110 transition duration-700 rounded-sm shadow-lg mx-auto text-center mt-2'>
						<Link href={'/menu'}>
							<a className=' text-xl  transition duration-700 bg-secondary p-4 uppercase tracking-wider'>
								Menu
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
