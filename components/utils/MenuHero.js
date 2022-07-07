import Image from 'next/image';

const MenuHero = ({ src, alt }) => {
	return (
		<div>
			<div className='text-center opacity-20'>
				<Image src={src} alt={alt} height={600} layout='intrinsic' />{' '}
			</div>
            <div>
                Menu
            </div>
		</div>
	);
};

export default MenuHero;
