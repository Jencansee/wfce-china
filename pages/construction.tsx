import DefaultLayout from '@layouts/default';
import { NextPageWithLayout } from './_app';
import { ReactElement } from 'react';
import Container from '@components/Container/Container';
import Breaker from '@components/Breaker';
import Cards from '@components/Cards/Cards';
import Title from '@components/Title/Title';
import Section from '@components/Section/Section';
import Description from '@components/Description/Description';
import CommonFirstScreen from '@components/FirstScreen/FirstScreen';

//* images
import ImgEdit from '/assets/images/contour/doc-edit.svg'
import ImgMagnifier from '/assets/images/contour/magnifier-person.svg'
import ImgAward from '/assets/images/contour/award.svg'
import ImgEngineer from '/assets/images/contour/engineer.svg'
import ImgWrench from '/assets/images/contour/wrench.svg'
import ImgGrowth from '/assets/images/contour/graph-grow.svg'
import ImgClipboardOk from '/assets/images/contour/clipboard-ok-circle.svg'

import ImgHat from '/assets/images/contour/engi-hat.svg'
import ImgAnvil from '/assets/images/contour/anvil.svg'
import ImgPipe from '/assets/images/contour/pipe.svg'
import ImgEnergy from '/assets/images/contour/energy.svg'
import ImgAutomation from '/assets/images/contour/automation.svg'
import ImgModules from '/assets/images/contour/modules.svg'



const Construction: NextPageWithLayout = () => {
  return (
    <>
			<CommonFirstScreen
				pageTitle={'CONSTRUCTION \n MANAGEMENT'}
				breadcrumbTitle={'Construction management'}
				pageUrl="construction"
				backgroundImage="/assets/imgs/backgrounds/construction.png"
				description={
					[
						'WFCE applies digital technologies and engineering data management system, BIM modeling in the management of construction and installation works. At all levels of construction and installation works, 3D modeling, laser scanning, various ways of fixing the progress of work are used: both to manage the work and to provide the customer with the most complete and accurate information about the progress of the project.',
						'As with the completion of facilities, WFCE takes a responsible approach to the selection of contractors and includes in the project those companies that best suit the current task and have proven competencies.'
					]
				}
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
						CONSTRUCTION MANAGEMENT SERVICES
					</Title>
					<Description>
						{'Construction management WFCE carries out comprehensive\n management of construction and installation and commissioning works:'}
					</Description>
					<Cards 
						cards={[
							{ text: 'Prepares contracts for works', image: ImgEdit },
							{ text: 'Organizes tenders among qualified contractors', image: ImgAward },
							{ text: 'Carries out architectural supervision and engineering control', image: ImgMagnifier },

							{ text: 'Supervises the execution of construction works', image: ImgEngineer },
							{ text: 'Controls the implementation of commissioning', image: ImgWrench },
							{ text: 'Provides a conclusion of technological process on a steady mode', image: ImgGrowth },
							{ text: 'Checks the completion of acceptance work', image: ImgClipboardOk }
						]}
					/>
				</Container>
			</Section>

			<Section
				paddingTop={{
					afterTablet: '8rem',
					beforeTablet: '12rem'
				}}
			>
				<Container>
					<Description>
						{'WFCE has accumulated experience in managing international\n contractors in the following areas: '}
					</Description>
					<Cards 
						cards={[
							{ text: 'Implementation of general construction works', image: ImgHat },
							{ text: 'Installation of metal structures', image: ImgAnvil },
							{ text: 'Installation of pipelines', image: ImgPipe },

							{ text: 'Installation of electrical and instrumentation equipment', image: ImgEnergy },
							{ text: 'Installation of automation systems', image: ImgAutomation },
							{ text: 'Construction of temporary buildings and structures', image: ImgModules }
						]}
					/>
				</Container>
			</Section>

			<Breaker>
				<p>
					<b>WFCE</b> provides a single digital field and high standards of process management at all stages of construction and commissioning of facilities. 
				</p>
			</Breaker>
    </>
  )
};


Construction.getLayout = (page: ReactElement) => {
	return (
		<DefaultLayout title="CONSTRUCTION MANAGEMENT">
			{ page }
		</DefaultLayout>
	) 
};

export default Construction;