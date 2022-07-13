import MenuHeading from '../../utils/MenuHeading';
import House from './House';
import Super from './Super';
import Vegi from './Vegi';

const AllSpecials = () => {
	return (
		
			<div className='grid gap-4 p-6'>
				<MenuHeading title={'Specials'} />
				<div className='card card-special'>
					<Super />
				</div>
				<div className='card card-special'>
					<House />
				</div>
				<div className='card card-special'>
					<Vegi />
				</div>
			</div>
		
	);
};

export default AllSpecials;
