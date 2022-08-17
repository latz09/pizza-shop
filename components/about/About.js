import Image from 'next/image';

const About = () => {
	return (
		<>
			<div className='max-w-7xl mx-auto py-32 text-4xl md:text-5xl text-gray-600 font-logo tracking-widest '>
				<p className='mx-3 text-center'>
					Proudly Serving the City of{' '}
					<span className='text-pizzaRed-500'> West Saint Paul</span> Since 19##
				</p>
			</div>
		</>
	);
};

export default About;
