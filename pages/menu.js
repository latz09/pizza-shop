import BuildYourOwn from '../components/menu/buildYourOwn/BuildYourOwn';
import PizzaFries from '../components/menu/PizzaFries';
import Sandwiches from '../components/menu/sandwich-burger/Sandwiches';
import AllSpecials from '../components/menu/specials/AllSpecials';

import { useState } from 'react';
import MenuToggle from '../components/utils/MenuToggle';
import MenuHero from '../components/heros/MenuHero';

const MenuPage = () => {
	const [menuCategory, setMenuCategory] = useState(1);

	return (
		<div className=''>
			<MenuHero menuCategory={menuCategory} setMenuCategory={setMenuCategory} />
			<div className='grid justify-evenly text-center'>
				<div>
					{menuCategory === 1 && <BuildYourOwn />}
					{menuCategory === 2 && <PizzaFries />}
					{menuCategory === 3 && <AllSpecials />}
					{menuCategory === 4 && <Sandwiches />}
				</div>
			</div>
		</div>
	);
};

export default MenuPage;
