import DefaultLayout from '@layouts/default';
import { NextPageWithLayout } from './_app';
import { ReactElement, SyntheticEvent, useState } from 'react';
import Container from '@components/Container/Container';
import Breaker from '@components/Breaker';
import Cards from '@components/Cards/Cards';
import Title from '@components/Title/Title';
import Section from '@components/Section/Section';
import CommonFirstScreen from '@components/FirstScreen/FirstScreen';
import ModalWithForm from '@components/ModalForm/ModalWithForm';
import Statement from '@components/Statement/Statement';

//* images
import StatementImage from '/assets/images/components/Statement/mobile.jpg';
import ImgMagnifier from '/assets/images/contour/magnifier-person.svg';
import ImgGraphCircled from '/assets/images/contour/graph-circled.svg';
import ImgPiggyBank from '/assets/images/contour/piggybank.svg';
import ImgBlueprint from '/assets/images/contour/blueprint.svg';
import ImgCamera from '/assets/images/contour/camera.svg';
import ImgEquipment from '/assets/images/contour/equipment.svg';
import ImgChart from '/assets/images/contour/chart.svg';
import ImgOkCircle from '/assets/images/contour/ok-circle.svg'
import ImgBrain from '/assets/images/contour/brain.svg';
import ImgAward from '/assets/images/contour/award.svg';
import ImgPresentation from '/assets/images/contour/presentation.svg';
import ImgAutomationBelt from '/assets/images/contour/automation-belt.svg';
import ImgIdea from '/assets/images/contour/idea-cog.svg';


const Engineering: NextPageWithLayout = () => {
	const [modalOpen, setModalOpen] = useState('');

	const toggleModal = () => {
		if (modalOpen === 'open') {
			setModalOpen('close');
		} 
		else {
			setModalOpen('open');
		}
	};

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		console.log('submit event');
	};


  return (
    <>
			<CommonFirstScreen
				pageTitle={"Industrial\n development"}
				pageUrl="engineering"
				backgroundImage="/assets/imgs/backgrounds/industrial.png"
				description={
					["WFCE provides industrial development services in the oil and gas and petrochemical industries: a comprehensive model for the implementation of functioning industrial facilities with built-up commercial activities."]
				}
			/>
			
			<Statement
				title="HOW WE ARE WORKING"
				text={[
					"Thanks to extensive competencies, financial support from leading international banks, WFCE carries out the conceptualization, implementation and management of investment projects from scratch and on a turnkey basis.",
					"The launch of the project is possible at the expense of WFCE's own investments. Third-party investments are attracted through the issue of shares or the sale of a project under a built-to-suite contract. Either the sale takes place after the launch of production, as a ready-made business.",
					"The developer is responsible for developing the business plan in the early stages of the project; at later stages - for its execution. WFCE provides both the development of a full-fledged business with the selection of effective innovative solutions; as well as putting it into operation, building production and financial cycles, implementing a marketing strategy"
				]}
				image={StatementImage}
			/>

			<Section>
				<Container>
					<Title 
						alignCenter={true}
						shouldDivide={true}
						marginBottom={{ sm: '1.5rem', md: '2rem' }}
					>
						{'SEARCH FOR A CONCEPT\n INVESTMENT:'}
					</Title>
					<Cards 
						cards={[
							{ text: 'Monitoring the needs of local markets in order to create a demanded offer', image: ImgMagnifier },
							{ text: 'Justification of investments, feasibility study, development  of the project concept', image: ImgGraphCircled },
							{ text: 'Attracting financial support from investors', image: ImgPiggyBank },
						]}
					/>
				</Container>
			</Section>

			<Section>
				<Container>
					<Title 
						alignCenter={true}
						shouldDivide={true}
						marginBottom={{ sm: '1.5rem', md: '2rem' }}
					>
						{'IMPLEMENTATION OF THE FULL CYCLE\n OF CAPITAL CONSTRUCTION WITH WFEC:'}
					</Title>
					<Cards 
						cards={[
							{ text: 'Design', image: ImgBlueprint },
							{ text: 'Engineering survey', image: ImgCamera },
							{ text: 'Equipment', image: ImgEquipment },

							{ text: 'Management of construction and installation works and commissioning', image: ImgChart },
							{ text: 'Commissioning', image: ImgOkCircle },
						]}
					/>
				</Container>
			</Section>


			<Section>
				<Container>
					<Title 
						alignCenter={true}
						shouldDivide={true}
						marginBottom={{ sm: '1.5rem', md: '2rem' }}
					>
						{'FACILITY OPERATION\n AND OPERATIONAL MANAGEMENT:'}
					</Title>
					<Cards 
						cards={[
							{ text: 'Development of new products', image: ImgBrain },
							{ text: 'Design of production processes', image: ImgBlueprint },
							{ text: 'Confirmation of compliance with quality standards', image: ImgAward },

							{ text: 'Pre-production and MVP', image: ImgPresentation },
							{ text: 'Mass production', image: ImgAutomationBelt },
							{ text: 'Sales of products', image: ImgIdea },
						]}
					/>
				</Container>
			</Section>

			<Breaker>
				<p>
					Our own analytical department, constantly growing business competencies of the company&apos;s experts, the use of digital technologies at all stages, proven technologies in management, and transparency of processes make it possible to create effective, in-demand enterprises. 
				</p>
			</Breaker>

			{/* //FIXME remove it from here */}
			<ModalWithForm
				toggleModal={toggleModal}
				isOpen={modalOpen}
				submitHandler={(e: SyntheticEvent) => handleSubmit(e)}
			/>
    </>
  )
};


Engineering.getLayout = (page: ReactElement) => {
	return (
		<DefaultLayout title="Engineering">
			{ page }
		</DefaultLayout>
	)
};

export default Engineering;