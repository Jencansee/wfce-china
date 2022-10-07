import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components';
import Breaker from '../components/Breaker';
import Button from '../components/Buttons/Button';
import Card from '../components/Card/Card';
import Cards from '../components/Cards/Cards';
import Container, { StyledContainer } from '../components/Container/Container';
import Header from '../components/Header/Header'
import Statement from '../components/Statement/Statement';
import Title from '../components/Title/Title';
import Image from '/assets/images/index/statement.png'
import graphImage from '/assets/images/contour/graph.svg'
import cogsImage from '/assets/images/contour/cogs.svg';
import earthImage from '/assets/images/contour/earth.svg';
import rocketImage from '/assets/images/contour/rocket.svg';
import eyeImage from '/assets/images/contour/eye.svg';
import growthImage from '/assets/images/contour/growth.svg';
import Section from '../components/Section/Section';

const FirstScreen = styled.section`
	height: calc(100vh - 100px);
	background: linear-gradient(250.15deg, #E6EDF2 19.54%, #FCFDFE 67.87%, #FDFEFF 101.45%);
	border-bottom: 1px solid #9A9A9A;

	${StyledContainer} {		
		padding: 8rem 1.5rem;

		@media (min-width: 540px) {
			padding-top: 19.4rem;
			padding-bottom: 19.4rem;
		}

		@media (min-width: 768px) {
			padding-top: 25.6rem;
			padding-bottom: 25.6rem;
		}
	}
`;

const Slogan = styled.span`
	font-size: 2.4rem;
	font-weight: 400;
	line-height: 1.2;
	color: #CD1D19;
`;

const MainHeading = styled.h2`
	font-size: 5.2rem;
	font-weight: 500;
	line-height: 1.2;
	margin-top: 2.5rem;
	margin-bottom: 3rem;
	
	@media (min-width: 768px) {
		margin-bottom: 4rem;
	}
`;

const ChineseHeading = styled.span`
	display: block;
	font-size: 4.8rem;
	margin-top: 2rem;
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>WORLD FAITH CONSTRUСTION ENGINEERING LIMITED</title>
        <meta name="description" content="WORLD FAITH CONSTRUСTION ENGINEERING LIMITED" />
      </Head>
			
			<Header />

      <main>
				<FirstScreen>
					<Container>
						<Slogan>工程。 建造。 咨询。 贸易。</Slogan>
						<MainHeading>
							WE ARE CREATING A BETTER <br />
							FUTURE WITH OUR PARTNERS
							<ChineseHeading>我们与合作伙伴共创美好未来</ChineseHeading>
						</MainHeading>
						<Button>Сontact us</Button>
					</Container>
				</FirstScreen>
				<Statement
					title="WFCE IS A HIGH-TECH ENGINEERING COMPANY"
					text={[
						'The WFCE team has extensive experience in applying effective design and management technologies in the construction of facilities in the oil and gas and processing industries. The company also develops competencies in the design and construction of facilities for the chemical industry, synthesis and alternative energy.',
						'WFCE provides a high level of quality and efficient technologies in the implementation of the largest projects. This approach provides the customer with complete transparency, minimizing risks during the construction phase and maximizing the efficiency of facility operation.'	
					]}
					image={Image}
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
      </main>
    </>
  )
}

export default Home
