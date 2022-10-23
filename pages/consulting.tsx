import DefaultLayout from '@layouts/default';
import { NextPageWithLayout } from './_app';
import { ReactElement } from 'react';
import Container from '@components/Container/Container';
import Cards from '@components/Cards/Cards';
import Title from '@components/Title/Title';
import Section from '@components/Section/Section';
import Description from '@components/Description/Description';
import CommonFirstScreen from '@components/FirstScreen/FirstScreen';
import Statement from '@components/Statement/Statement';
import Partners from '@components/Partners/Partners';

//* images
import StatementImage from '/assets/images/components/Statement/plans.jpg';
import ImgHalfDiag from '/assets/images/contour/diagram-cog.svg'
import ImgTimer from '/assets/images/contour/timer.svg'
import ImgResearch from '/assets/images/contour/research.svg'
import ImgDoc from '/assets/images/contour/doc.svg'
import ImgOilHandle from '/assets/images/contour/oil-handle.svg'
import ImgRoll from '/assets/images/contour/presentation-roll.svg'
import ImgCog from '/assets/images/contour/cog-rotate.svg'

import ImgBank from '/assets/images/contour/bank.svg'
import ImgShield from '/assets/images/contour/shield.svg'
import ImgText from '/assets/images/contour/text-ok.svg'
import ImgCoins from '/assets/images/contour/coins.svg'
import ImgCard from '/assets/images/contour/card-verified.svg'
import ImgDom from '/assets/images/contour/dom.svg'
import ImgLocation from '/assets/images/contour/location.svg'
import ImgSupport from '/assets/images/contour/support.svg'
import ImgBox from '/assets/images/contour/box-verified.svg'
import TextSection from '@components/Pages/Consulting/TextSection';

//* Partners
import Partner1 from '/assets/images/components/Partners/ccb.jpg';
import Partner2 from '/assets/images/components/Partners/shenhua.jpg';
import Partner3 from '/assets/images/components/Partners/clp.jpg';
import Partner4 from '/assets/images/components/Partners/chinacoal.jpg';
import Partner5 from '/assets/images/components/Partners/baosteel.jpg';
import Partner6 from '/assets/images/components/Partners/reg.jpg';
import Partner7 from '/assets/images/components/Partners/sipg.jpg';
import Partner8 from '/assets/images/components/Partners/sfe.jpg';
import Partner9 from '/assets/images/components/Partners/energychina.jpg';
import Partner10 from '/assets/images/components/Partners/petrochina.jpg';
import Partner11 from '/assets/images/components/Partners/jinmao.jpg';
import Partner12 from '/assets/images/components/Partners/citic.jpg';


const Consulting: NextPageWithLayout = () => {
  return (
    <>
			<CommonFirstScreen
				pageTitle={'CONSULTING \n AND TRADING'}
				breadcrumbTitle={'Consulting and trading'}
				pageUrl="consulting"
				backgroundImage="/assets/imgs/backgrounds/consulting.png"
				description={[
					'WFCE consulting and trade division provides a full cycle\n of works from searching for a buyer to delivery on time.',
				]}
			/>

			<Statement
				title="CONSULTING SERVICES FOR COMPANIES IN THE OIL AND GAS SECTOR"
				text={[
					"WFCE is one of the leaders in providing consulting services for companies in the oil and gas industry, and our team is an international center of excellence. We work with most companies in China, the Middle East, Europe and Latin America. Our experience covers all key areas of the oil and gas industry and includes exploration, development, production, transportation, refining and marketing of oil and gas, as well as field services.",
					"We have experience in advising clients on the full range of management issues: from strategy development to the implementation of information systems at the field level"
				]}
				image={StatementImage}
			/>

			
			<Section
				paddingTop={{
					afterTablet: '0',
					beforeTablet: '0'
				}}
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
						AREAS OF WORK
					</Title>
					<Description>
						{'Deep knowledge of the specifics of the activities of companies in the oil and\n gas sector allows us to implement specialized projects in the following areas:'}
					</Description>
					<Cards 
						cards={[
							{ text: 'Modeling and optimization of a portfolio of hydrocarbon assets', image: ImgHalfDiag },
							{ text: 'Reduction of fishing costs and extension of the economically viable period for the development of hydrocarbon fields', image: ImgTimer },
							{ text: 'Audit and forecasting of material balances, including works related to associated petroleum gas', image: ImgResearch },

							{ text: 'Processes and systems for the production accounting of hydrocarbon products and reporting on material flows in the field (oil / gas / water)', image: ImgDoc },
							{ text: 'Strategies and processes of companies providing oilfield services and producing oil and gas equipment', image: ImgOilHandle },
							{ text: 'Analysis of the oilfield services market and benchmarking of key indicators', image: ImgRoll },
							
							{ text: 'Improvement of the system of consumption of oilfield services', image: ImgCog }
						]}
					/>
				</Container>
			</Section>

			<TextSection 
				title={'ENTERING\n INTERNATIONAL\n MARKETS'}
				description={[
					'As part of interaction with customers and partners, the company provides support for entering international markets.',
					'WFCE will conduct for you a secure transaction for the sale of petroleum products, metals, industrial equipment and other goods on the international market. The specialists of our company will develop the optimal technology and conduct a safe transaction for you.'
				]}
			/>

			<Section
				paddingTop={{
					afterTablet: '0',
					beforeTablet: '0'
				}}
				paddingBottom={{
					afterTablet: '0',
					beforeTablet: '0'
				}}
			>
				<Container>
					<Title 
						alignCenter={true}
						marginBottom={{ sm: '4rem', md: '6rem' }}
					>
						WE PROVIDE
					</Title>
					<Cards 
						cards={[
							{ text: 'Banking support', image: ImgBank },
							{ text: 'Checking the security of your partners', image: ImgShield },
							{ text: 'Verification of the authenticity of the submitted documents', image: ImgText },
							
							{ text: 'Checking the financial condition of the partner', image: ImgCoins },
							{ text: 'Development of a secure financial part of the transaction', image: ImgCard },
							{ text: 'Development of an optimal logistics scheme', image: ImgDom },
							
							{ text: 'Selection of the optimal location for finding goods', image: ImgLocation },
							{ text: 'Selection of a logistics operator according to your needs', image: ImgSupport },
							{ text: 'Development of safe delivery technology', image: ImgBox },
						]}
					/>
				</Container>
			</Section>

			<Section
				paddingBottom={{
					afterTablet: '0',
					beforeTablet: '0'
				}}
			>
				<Container>
					<Title 
						alignCenter={true}
						marginBottom={{ sm: '4rem', md: '6rem' }}
					>
						PARTNERS
					</Title>
					<Partners
						partners={[
							{ name: 'China Construction Bank', image: Partner1 },
							{ name: 'China Shenhua', image: Partner2 },
							{ name: 'CLP', image: Partner3 },
							{ name: 'ChinaCoal', image: Partner4 },
							{ name: 'BAOSTEEL', image: Partner5 },
							{ name: 'REC', image: Partner6 },
							{ name: 'SIPG', image: Partner7 },
							{ name: 'SF Express', image: Partner8 },
							{ name: 'Energy China', image: Partner9 },
							{ name: 'Petrochina', image: Partner10 },
							{ name: 'JINMAO', image: Partner11 },
							{ name: 'CITIC Limited', image: Partner12 },
						]}
					/>

				</Container>
			</Section>
    </>
  )
};


Consulting.getLayout = (page: ReactElement) => {
	return (
		<DefaultLayout title="Consulting and Trading">
			{ page }
		</DefaultLayout>
	) 
};

export default Consulting;