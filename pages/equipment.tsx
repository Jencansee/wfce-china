import DefaultLayout from '@layouts/default';
import { NextPageWithLayout } from './_app';
import { ReactElement, SyntheticEvent, useState } from 'react';
import Container from '@components/Container/Container';
import Cards from '@components/Cards/Cards';
import Title from '@components/Title/Title';
import Section from '@components/Section/Section';
import Description from '@components/Description/Description';
import CommonFirstScreen from '@components/FirstScreen/FirstScreen';
import ModalWithForm from '@components/ModalForm/ModalWithForm';

//* images
import ImgMagnifier from '/assets/images/contour/magnifier-person.svg';
import ImgClipOk from '/assets/images/contour/clipboard-ok.svg'
import ImgResearch from '/assets/images/contour/research.svg'
import ImgPresentation from '/assets/images/contour/presentation.svg'
import ImgShipFront from '/assets/images/contour/ship-front.svg'
import ImgPumpJack from '/assets/images/contour/pumpjack.svg'
import ImgShip from '/assets/images/contour/ship.svg'
import ImgGauge from '/assets/images/contour/gas-gauge.svg'



const Equipment: NextPageWithLayout = () => {
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
				pageTitle={'Equipment'}
				pageUrl="construction"
				backgroundImage="/assets/imgs/backgrounds/equipment.png"
			/>
			
			<Section
				paddingBottom={{
					afterTablet: '0',
					beforeTablet: '0'
				}}
			>
				<Container>
					<Title 
						alignCenter={true}
						marginBottom={{ sm: '1.5rem', md: '2rem' }}
					>
						EQUIPMENT SERVICES
					</Title>
					<Description>
						{'WFCE production and logistics division provides a full supply cycle from\n searching for a technological solution to delivery on time: '}
					</Description>
					<Cards 
						cards={[
							{ text: 'Market analysis, selection of manufacturers and technical solutions', image: ImgMagnifier },
							{ text: 'Verification of permits for equipment suppliers', image: ImgClipOk },
							{ text: 'Technical audit of recommended manufacturers', image: ImgResearch },

							{ text: 'Formation of a procurement strategy and organization of supplies', image: ImgPresentation },
							{ text: 'Transportation and freight forwarding', image: ImgShipFront },
						]}
					/>
				</Container>
			</Section>

			<Section
				paddingTop={{
					afterTablet: '12rem',
					beforeTablet: '12rem'
				}}
				paddingBottom={{
					afterTablet: '0',
					beforeTablet: '0'
				}}
			>
				<Container>
					<Description>
						{'WFCE provides production, localization\n and supply of equipment:'}
					</Description>
					<Cards 
						cards={[
							{ text: 'For the oil and gas complex, petrochemistry, gas chemistry, low-tonnage chemistry and the mineral fertilizer industry', image: ImgPumpJack },
							{ text: 'For transportation and storage of oil, gas and products of their processing', image: ImgShip },
							{ text: 'Specialized engineering competencies in the field of cryogenic technologies and gas treatment', image: ImgGauge }
						]}
					/>
				</Container>
			</Section>

			{/* //FIXME remove it from here */}
			<ModalWithForm
				toggleModal={toggleModal}
				isOpen={modalOpen}
				submitHandler={(e: SyntheticEvent) => handleSubmit(e)}
			/>
    </>
  )
};


Equipment.getLayout = (page: ReactElement) => {
	return (
		<DefaultLayout title="Equipment">
			{ page }
		</DefaultLayout>
	) 
};

export default Equipment;