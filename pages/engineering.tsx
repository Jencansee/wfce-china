import DefaultLayout from '@layouts/default';
import { NextPageWithLayout } from 'types';
import { ReactElement } from 'react';
import Container from '@components/Container/Container';
import Breaker from '@components/Breaker';
import Cards from '@components/Cards/Cards';
import Title from '@components/Title/Title';
import Section from '@components/Section/Section';
import Description from '@components/Description/Description';
import CommonFirstScreen from '@components/FirstScreen/FirstScreen';

//* images
import FirstScreenImage from 'assets/images/components/FirstScreen/engineering.png';
import ImgClipboard from '/assets/images/contour/clipboard.svg';
import ImgChart from '/assets/images/contour/chart-divided.svg';
import ImgGraphCircled from '/assets/images/contour/graph-circled.svg';
import ImgLamp from '/assets/images/contour/lamp.svg';
import ImgClipboardOk from '/assets/images/contour/clipboard-ok.svg';
import ImgResearch from '/assets/images/contour/research.svg';
import ImgStamp from '/assets/images/contour/stamp.svg';
import ImgCompass from '/assets/images/contour/compass.svg';
import ImgEngineerHat from '/assets/images/contour/engineer-hat.svg';


const Engineering: NextPageWithLayout = () => {
  return (
    <>
			<CommonFirstScreen
				pageTitle="Engineering"
				pageUrl="engineering"
				backgroundImage={FirstScreenImage}
				description={
					["Engineering design with consideration of the project's long-term development strategy, its economy and logistics, a feasibility study and including digital technologies at all stages of implementation - the main principles of WFCE when carrying out engineering works."]
				}
			/>
			
			<Section>
				<Container>
					<Title 
						alignCenter={true}
						marginBottom={{ sm: '1.5rem', md: '2rem' }}
					>
						STAGES OF WORK
					</Title>
					<Description>
						{'WFCE project division works with each facility throughout the entire\n life cycle from conception to commissioning:'}
					</Description>
					<Cards 
						cards={[
							{ text: 'Pre-design and design stages', image: ImgClipboard },
							{ text: 'Market research', image: ImgChart },
							{ text: 'Investment and Feasibility study', image: ImgGraphCircled },

							{ text: 'Basic technical solutions', image: ImgLamp },
							{ text: 'Design and survey work', image: ImgClipboardOk },
							{ text: 'Technical audit and architectural supervision', image: ImgResearch },
							
							{ text: 'Specifications and assignments, permits', image: ImgStamp },
							{ text: 'Adaptation of basic designs, FEED, Detail Engineering Design', image: ImgCompass },
							{ text: 'Performance of functions of the general designer', image: ImgEngineerHat },
						]}
					/>
				</Container>
			</Section>

			<Breaker>
				<p>
					<b>WFCE</b> is committed to applying proven solutions, unifying those solutions and how they are used to create uniform industry standards and customer convenience. The company develops a BIM model and applies it throughout the life cycle of the project. 
				</p>
			</Breaker>
    </>
  )
};


Engineering.getLayout = (page: ReactElement) => {
	return (
		<DefaultLayout
			title="Engineering"
			description="WFCE is an international engineering companyy"
		>
			{ page }
		</DefaultLayout>
	)
};

export default Engineering;