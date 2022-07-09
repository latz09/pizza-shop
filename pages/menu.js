import BuildYourOwn from '../components/menu/buildYourOwn/BuildYourOwn';
import PizzaFries from '../components/menu/PizzaFries';
import Sandwiches from '../components/menu/sandwich-burger/Sandwiches';
import AllSpecials from '../components/menu/specials/AllSpecials';

import { useState } from 'react';
import MenuToggle from '../components/utils/MenuToggle';

const MenuPage = () => {
	const [menuCategory, setMenuCategory] = useState(1);

	return (
		<div className='pb-12  bg-gray-50 min-h-screen'>
			<div className='md:pt-14 grid justify-evenly text-center sm:gap-4'>
				<MenuToggle
					menuCategory={menuCategory}
					setMenuCategory={setMenuCategory}
				/>
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

/**
 * usestate set the state of what is being displayed
 *
 * Need a component that has each tab
 * 	onclick it will set the state s1 || s2 || s3 || s4
 * each component renders conditonally {state === s1 && <BuildYourOwn/>}
 *
 */
