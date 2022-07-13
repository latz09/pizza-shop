import MenuSection from '../../utils/MenuSection';
import Crusts from '../Crusts';

const Burger = () => {
	return (
		<>
			
			<ul className='flex space-x-3 justify-center text-pizzaRed-600 mb-4'>
				<li>Beef</li>
				<li>Onions</li>
				<li className="tracking-tighter">Dill Pickle</li>
			</ul>
			<Crusts small={'$11'} medium={'$13'} large={'$15'} />
		</>
	);
};

export default Burger;
