import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import building from '../../public/images/building-at-sunset.png';

const Hero = () => {
	return (
		<>
		<div className='relative h-[66vh] lg:h-[66vh]'>
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
			<div className='relative font-oswald flex justify-center items-center h-full bg-gradient-to-t from-dark/30 via-dark/70 to-dark/10 text-[#FFF7F7] '>
				<motion.div 
					initial={{ opacity: 0, scale: .7 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.5, delay: .9 }}
				className='grid gap-6'>
					<h1 className='text-5xl md:text-7xl  scale-y-150'>The Pizza Shop</h1>
					<motion.div className='grid gap-2 text-xl text-center opacity-95'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 1.5 }}
					>
						
						<h1 className='  text-4xl md:text-5xl '>
							West Saint Paul
						</h1>
						<p className='tracking-wider font-questrial'>1037 Dodd Rd</p>
						{/* <p className=''>{`(651) 457-0777`}</p> */}
					</motion.div>
					<motion.div 
						initial={{ opacity: 0,  }}
						animate={{ opacity: 1, }}
						transition={{ duration: 2.1, delay: 1.5  }}

					className='grid w-1/3   hover:opacity-90 hover:scale-110 transition duration-700 rounded-sm shadow-lg mx-auto text-center mt-2'>
						<Link href={'/menu'}>
							<a className=' text-xl  transition duration-700 bg-secondary p-2 rounded shadow-lg  font-questrial uppercase tracking-wider'>
								Menu
							</a>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</div>
		</>
	);
};

export default Hero;
