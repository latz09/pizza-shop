import pizza from '../../public/images/pizza.jpg';
import Image from 'next/image';

const FrozenPizzaAdd = () => {
	return (
		<div className='max-w-7xl mx-auto'>
			<div className='grid grid-cols-2 p-12'>
				<div className="px-2 pt-2 shadow rounded-full ">
					<Image
						src={pizza}
						alt=''
						height={400}
						width={500}
						layout='intrinsic'
					/>
				</div>
			</div>
		</div>
	);
};

export default FrozenPizzaAdd;
