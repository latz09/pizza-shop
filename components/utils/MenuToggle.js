const MenuToggle = ({ setMenuCategory, menuCategory }) => {
	return (
		<div className='tracking-tighter space-x-2 flex justify-evenly mt-3 md:mt-0'>
			<button
				onClick={() => setMenuCategory(1)}
				className={`${
					menuCategory !== 1 ? `btn-menu-nav` : 'btn-menu-focused btn-menu-nav'
				}`}
			>
				Build Your Own
			</button>
			<button
				onClick={() => setMenuCategory(2)}
				className={`${
					menuCategory !== 2 ? `btn-menu-nav` : 'btn-menu-focused btn-menu-nav'
				}`}
			>
				Pizza Fries
			</button>
			<button
				onClick={() => setMenuCategory(3)}
				className={`${
					menuCategory !== 3 ? `btn-menu-nav` : 'btn-menu-focused btn-menu-nav'
				}`}
			>
				Specialties
			</button>
			<button
				onClick={() => setMenuCategory(4)}
				className={`${
					menuCategory !== 4 ? `btn-menu-nav` : 'btn-menu-focused btn-menu-nav'
				}`}
			>
				Sandwich & Burger
			</button>
		</div>
	);
};

export default MenuToggle;
