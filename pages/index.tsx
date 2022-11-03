import IndexLayout from '@layouts/index';
import { NextPageWithLayout } from 'types';
import { ReactElement } from 'react';
import ModalWithForm from '@components/ModalForm/ModalWithForm';
import { useGlobalContext } from 'contexts/globalFormContext';
import FirstScreen from '@components/Pages/Index/FirstScreen';
import Container from '@components/Container/Container';
import Statement from '@components/Statement/Statement';
import Section from '@components/Section/Section';
import Cards from '@components/Cards/Cards';
import Title from '@components/Title/Title';
import Breaker from '@components/Breaker';

//* images
import eyeImage from '/assets/images/contour/eye.svg';
import cogsImage from '/assets/images/contour/cogs.svg';
import graphImage from '/assets/images/contour/graph.svg';
import earthImage from '/assets/images/contour/earth.svg';
import rocketImage from '/assets/images/contour/rocket.svg';
import growthImage from '/assets/images/contour/growth.svg';
import statementImage from '/assets/images/index/statement.png';


const Home: NextPageWithLayout = () => {
	const { isModalActive, setModal } = useGlobalContext();
	const handleClick = () => isModalActive === 'open' ? setModal('close') : setModal('open');

  return (
    <>
			<FirstScreen 
				toggleModal={handleClick}
			/>
			
			<Statement
				title="WFCE IS A HIGH-TECH ENGINEERING COMPANY"
				text={[
					'The WFCE team has extensive experience in applying effective design and management technologies in the construction of facilities in the oil and gas and processing industries. The company also develops competencies in the design and construction of facilities for the chemical industry, synthesis and alternative energy.',
					'WFCE provides a high level of quality and efficient technologies in the implementation of the largest projects. This approach provides the customer with complete transparency, minimizing risks during the construction phase and maximizing the efficiency of facility operation.'	
				]}
				image={statementImage}
			/>

			<Section>
				<Container>
					<Title 
						alignCenter={true}
						marginBottom={{ sm: '4rem', md: '6rem' }}
					>
						OUR ADVANTAGES
					</Title>
					<Cards 
						cards={[
							{ text: 'Single point of\n responsibility for the result', image: graphImage },
							{ text: 'Competence in the field\n of legal and technical\n regulation of engineering', image: cogsImage },
							{ text: 'Knowledge of the\n international market', image: earthImage },
							{ text: 'Flexibility and efficiency of\n project management', image: rocketImage },
							{ text: 'Effective control at all\n stages of projects', image: eyeImage },
							{ text: 'Possibility of self-financing', image: growthImage },
						]}
					/>
				</Container>
			</Section>

			<Breaker>
				<p>
					<b>WFCE</b> is committed to applying proven solutions, unifying those solutions and how they are used to create uniform industry standards and customer convenience. 
				</p>
			</Breaker>

			<ModalWithForm
				toggleModal={handleClick}
				isOpen={isModalActive}
			/>
    </>
  )
};


Home.getLayout = (page: ReactElement) => {
	return (
		<IndexLayout>
			{ page }
		</IndexLayout>
	)
};

export default Home;