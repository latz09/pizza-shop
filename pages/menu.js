import Custom from '../components/menu/Custom';
import MenuHeading from '../components/utils/MenuHeading';

const MenuPage = () => {
	return (
		<div>
			<div className='md:mt-14 grid justify-center sm:gap-4 text-center'>
				<MenuHeading title={'Build Your Own'} />
				<Custom />
			</div>
		</div>
	);
};

export default MenuPage;
