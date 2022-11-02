import Head from 'next/head'
import { PropsWithChildren } from 'react';
import ModalWithForm from '@components/ModalForm/ModalWithForm';
import { useGlobalContext } from 'contexts/globalFormContext';
import Feedback from '@components/Feedback/Feedback';

interface LayoutProps {
	title: string;
}

const DefaultLayout = ({ 
	title, 
	children
}: PropsWithChildren<LayoutProps>) => {

	const { isModalActive, setModal } = useGlobalContext();
	const handleClick = () => isModalActive === 'open' ? setModal('close') : setModal('open');

  return (
    <>
      <Head>
        <title>{ title }</title>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

			<main>
        { children }
				<Feedback 
					handleClick={handleClick}
				/>
      </main>

			<ModalWithForm
				toggleModal={handleClick}
				isOpen={isModalActive}
			/>
    </>
  );
};

export default DefaultLayout;