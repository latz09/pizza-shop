import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
	const pageAnimateVariable = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				delay: 0.1,
				duration: 0.98,
			},
		},
		exit: { opacity: 0, transition: { duration: 0.4 } },
	};
	const router = useRouter();
	return (
		<div className=' '>
			<Layout>
				<AnimatePresence mode='wait'>
					<motion.div
						key={router.route}
						variants={pageAnimateVariable}
						className='font-mulish'
						initial='hidden'
						animate='visible'
						exit='exit'
					>
						<Component {...pageProps} />
					</motion.div>
				</AnimatePresence>
			</Layout>
		</div>
	);
}

export default MyApp;
