import MenuSection from '../../utils/MenuSection';
import Crusts from '../Crusts';

const Burger = () => {
	return (
		<div className="grid gap-2">
			
			<ul className='flex space-x-2  text-primary'>
				<li>Beef</li>
				<li>Onions</li>
				<li className="tracking-tighter">Dill Pickle</li>
			</ul>
			<Crusts small={'$11'} medium={'$13'} large={'$15'} />
		</div>
	);
};

export default Burger;
