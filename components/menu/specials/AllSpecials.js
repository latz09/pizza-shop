import MenuHeading from '../../utils/MenuHeading';
import House from './House';
import Super from './Super';
import Vegi from './Vegi';

const AllSpecials = () => {
	return (
		<div className='grid gap-4 mt-7'>
			<MenuHeading title={'Specials'} />
			<div className="grid gap-2">
				<div>
					<Super />
				</div>
				<div>
					<House />
				</div>
				<div>
					<Vegi />
				</div>
			</div>
		</div>
	);
};

export default AllSpecials;
