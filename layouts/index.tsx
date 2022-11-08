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
    	  <title>World Faith Construction Engineering Limited</title>
				<meta property="og:title" content="World Faith Construction Engineering Limited" />
				<meta name="description" content="WFCE is an international engineering company" />
				<meta property="og:description" content="WFCE is an international engineering company" />
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