'use client';
import React from 'react';
import Timeline from '@/webPages/Timeline';
import { motion } from 'framer-motion';
import { MobileNavContext } from '@/contexts/MobileNavProvider';

function page() {
	const { navShow, toggleNavShow } = React.useContext(MobileNavContext);
	React.useEffect(() => {
		if (navShow) toggleNavShow();
	}, []);
	return (
		<React.Fragment>
			<motion.div
				initial={{ y: -30, opacity: 0 }}
				animate={{ y: 100, opacity: 1 }}
				transition={{ delay: 0.2, duration: 1 }}
				className="z-10 min-h-screen"
			>
				<Timeline />;
			</motion.div>
		</React.Fragment>
	);
}

export default page;
