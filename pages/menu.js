import BuildYourOwn from '../components/menu/buildYourOwn/BuildYourOwn';
import PizzaFries from '../components/menu/PizzaFries';
import Sandwiches from '../components/menu/sandwich-burger/Sandwiches';
import AllSpecials from '../components/menu/specials/AllSpecials';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import MenuHero from '../components/heros/MenuHero';

const MenuPage = () => {
	const [menuCategory, setMenuCategory] = useState(1);
	const fadeIn = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<div className=''>
			<div className="sticky top-[10vh] z-50 sm:relative sm:top-0">
				<MenuHero
					menuCategory={menuCategory}
					setMenuCategory={setMenuCategory}
				/>
			</div>
			<div className='pb-24 mt-8 font-oswald tracking-wider'>
				<div className=''>
					<AnimatePresence mode='wait'>
						{menuCategory === 1 && (
							<motion.div
								key='byo'
								initial='hidden'
								animate='visible'
								exit='hidden'
								variants={fadeIn}
							>
								<BuildYourOwn />
							</motion.div>
						)}
						{menuCategory === 2 && (
							<motion.div
								key='pf'
								initial='hidden'
								animate='visible'
								exit='hidden'
								variants={fadeIn}
							>
								<PizzaFries />
							</motion.div>
						)}
						{menuCategory === 3 && (
							<motion.div
								key='as'
								initial='hidden'
								animate='visible'
								exit='hidden'
								variants={fadeIn}
							>
								<AllSpecials />
							</motion.div>
						)}
						{menuCategory === 4 && (
							<motion.div
								key='sw'
								initial='hidden'
								animate='visible'
								exit='hidden'
								variants={fadeIn}
							>
								<Sandwiches />
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
};

export default MenuPage;
