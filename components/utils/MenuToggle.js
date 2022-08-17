const MenuToggle = ({ setMenuCategory, menuCategory }) => {
	return (
		<>
			<div className='flex space-x-1'>
				<div>
					<button
						onClick={() => setMenuCategory(1)}
						className={`${
							menuCategory !== 1
								? `btn-menu-nav`
								: 'btn-menu-focused btn-menu-nav'
						}`}
					>
						Build Your Own
					</button>
				</div>
				<div>
					<button
						onClick={() => setMenuCategory(3)}
						className={`${
							menuCategory !== 3
								? `btn-menu-nav`
								: 'btn-menu-focused btn-menu-nav'
						}`}
					>
						Specialties
					</button>
				</div>
				<div>
					<button
						onClick={() => setMenuCategory(2)}
						className={`${
							menuCategory !== 2
								? `btn-menu-nav`
								: 'btn-menu-focused btn-menu-nav'
						}`}
					>
						Pizza Fries
					</button>
				</div>
				<div>
					<button
						onClick={() => setMenuCategory(4)}
						className={`${
							menuCategory !== 4
								? `btn-menu-nav`
								: 'btn-menu-focused btn-menu-nav'
						}`}
					>
						Sandwiches
					</button>
				</div>
			</div>
		</>
	);
};

export default MenuToggle;
