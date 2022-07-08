import BuildYourOwn from '../components/menu/buildYourOwn/BuildYourOwn';
import PizzaFries from '../components/menu/PizzaFries';
import Sandwiches from '../components/menu/sandwich-burger/Sandwiches';
import AllSpecials from '../components/menu/specials/AllSpecials';

import { useState } from 'react';
import MenuToggle from '../components/utils/MenuToggle';

const MenuPage = () => {

	return (
		<div className='pb-12  bg-gray-50 min-h-screen'>
		
			<div className='md:pt-14 grid justify-evenly text-center sm:gap-4'>
			<MenuToggle />
				<div>
					<BuildYourOwn />
				</div>
				<div>
					<PizzaFries />
				</div>
				<div>
					<Sandwiches />
				</div>
				<div>
					<AllSpecials />
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
