import Image from "next/image";
import styled from "styled-components";
import Button from "@components/Buttons/Button";
import Container, { StyledContainer } from "@components/Container/Container";
import GuyFsImage from '/assets/images/index/guy.png';

const StyledFirstScreen = styled.section`
	overflow: hidden;
	position: relative;
	min-height: 100%;
	padding-top: 10rem;
	border-bottom: 1px solid #9A9A9A;
	background: linear-gradient(250.15deg, #E6EDF2 19.54%, #FCFDFE 67.87%, #FDFEFF 101.45%);

	${StyledContainer} {		
		padding: 4rem 1.5rem 0;

		@media(min-width: 456px) {
			padding: 8rem 1.5rem;
		}

		@media (min-width: 540px) {
			padding-top: 19.4rem;
			padding-bottom: 19.4rem;
		}

		@media (min-width: 768px) {
			padding-top: 22rem;
			padding-bottom: 25.6rem;
			min-height: 100vh;
		}
	}
`;

const FsImageWrapper = styled.div`
	height: auto;
	padding-top: 2rem;
	width: calc(100% + 3rem);

	//* this is just cuz of nextjs bs
	span { 
		width: 100% !important;
		height: 100% !important;
	}

	@media (min-width: 768px) {
		width: 100%;
		max-height: 80%;
		position: absolute;
		bottom: 0; right: 0;
	}
	
	@media(min-width: 992px) {
		position: absolute;
		width: 70%;
	}
`;

const Slogan = styled.span`
	font-weight: 400;
	line-height: 1.2;
	font-size: 1.8rem;
	color: #CD1D19;

	@media (min-width: 768px) {
		font-size: 2.4rem;
	}
`;

const MainHeading = styled.h2`
	font-size: 2.8rem;
	font-weight: 500;
	line-height: 1.2;
	margin-top: 2rem;
	margin-bottom: 3rem;
	position: relative;
	z-index: 3;

	@media (min-width: 520px) { white-space: pre-line; }
	@media (min-width: 768px) {
		font-size: 4.2rem;
		margin-top: 2.5rem;
		margin-bottom: 4rem;
	}

	@media (min-width: 1024px) {
		font-size: 5.2rem;
	}
`;

const ChineseHeading = styled.span`
	display: block;
	font-size: 2.2rem;
	margin-top: 2rem;

	@media (min-width: 768px) {
		font-size: 4rem;
	}

	@media (min-width: 1024px) {
		font-size: 4.8rem;
	}
`;


const FirstScreen = ({ 
	toggleModal 
}: { 
	toggleModal: () => void; 
}) => {
	return(
		<StyledFirstScreen>
			<Container>
				<Slogan>工程。 建造。 咨询。 贸易。</Slogan>
				<MainHeading>
					{'WE ARE CREATING A BETTER \n FUTURE WITH OUR PARTNERS'}
					<ChineseHeading>我们与合作伙伴共创美好未来</ChineseHeading>
				</MainHeading>
				<Button handleClick={toggleModal}>Сontact us</Button>
				<FsImageWrapper>
					<Image
						alt=""
						src={GuyFsImage}
						sizes="(min-width: 768px) 1426px 900px,
							(min-width: 576px) 763px 499px,
							424px 267px"
						layout="responsive"
						objectFit="contain"
					/>
				</FsImageWrapper>
			</Container>
		</StyledFirstScreen>
	)
};

export default FirstScreen;