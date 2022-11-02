import Head from 'next/head';
import Feedback from '@components/Feedback/Feedback';
import { useGlobalContext } from 'contexts/globalFormContext';
import { PropsWithChildren } from 'react';

const IndexLayout = ({
	children
}: PropsWithChildren) => {
	const { isModalActive, setModal } = useGlobalContext();
	const handleClick = () => isModalActive === 'open' ? setModal('close') : setModal('open');

	return (
		<>
    	<Head>
    	  <title>WORLD FAITH CONSTRUСTION ENGINEERING LIMITED</title>
				<meta property="og:title" content="WORLD FAITH CONSTRUСTION ENGINEERING LIMITED" />
				<meta name="description" content="WORLD FAITH CONSTRUСTION ENGINEERING LIMITED" />
				<meta property="og:description" content="WFCE" />
    	</Head>
			<main>
    	  { children }
				<Feedback 
					handleClick={handleClick}
				/>
    	</main>
  </>
	);
};

export default IndexLayout;