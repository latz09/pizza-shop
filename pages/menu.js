import BuildYourOwn from '../components/menu/buildYourOwn/BuildYourOwn';
import PizzaFries from '../components/menu/PizzaFries';
import Sandwiches from '../components/menu/sandwich-burger/Sandwiches';
import AllSpecials from '../components/menu/specials/AllSpecials';
import MenuHeading from '../components/utils/MenuHeading';

const MenuPage = () => {
	return (
		<div className="pb-12  bg-gray-200 min-h-screen">
			<div className='md:pt-14 grid justify-center sm:gap-4 text-center'>
				<MenuHeading title={'Build Your Own'} />
				<BuildYourOwn />
                <MenuHeading title={'Pizza Fries'} />
                <PizzaFries />
                <MenuHeading title={'Sandwich & Burger'}/>
                <Sandwiches />
                <MenuHeading title={'Specials'} />
                <AllSpecials />
			</div>
		</div>
	);
};

export default MenuPage;
