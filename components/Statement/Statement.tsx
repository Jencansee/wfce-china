//* This is a section with an image with rounded bottom corner and a text with a title on right side of the image
import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import Container, { StyledContainer } from "../Container/Container";
import Title from "../Title/Title";


interface statementProps {
	title: string;
	text: string[];
	image: StaticImageData;
}

const Section = styled.section`
	padding: 12rem 0;	

	@media(min-width: 548px) {
		padding: 20rem 0;
	}
`

const CustomContainer = styled(StyledContainer)`
	display: flex;
	/* flex-wrap: wrap; */
	align-items: center;
	justify-content: space-between;
	flex-direction: column-reverse;

	@media(min-width: 992px) {
		flex-direction: row;
	}
`

const ImageContainer = styled.div`
	height: 30rem;
	width: 100%;

	span, img {
		height: 100% !important;
		width: 100% !important;
		object-fit: cover;
	}

	@media(min-width: 548px) {
		height: 40rem;
	}

	@media(min-width: 992px) {
		height: auto;
		max-height: 71rem;
		width: calc(50% - 3rem);
		width: calc(50% - 7.5rem);
	}
`

const StatementImage = styled(Image)`
	border-radius: 0 0 100px 0;

	@media(min-width: 548px) {
		border-radius: 0 0 200px 0;
	}

	@media(min-width: 768px) {
		border-radius: 0 0 265px 0;
	}
`

const StatementContent = styled.div`
	margin-bottom: 10rem;

	@media(min-width: 548px) {
		/* width: calc(50% - 3rem); */
	}

	@media(min-width: 992px) {
		margin-bottom: 0;
		/* margin-left: 15rem; */
		/* width: 44%; */
		width: calc(50% - 7.5rem);
	}
`;

const StatementText = styled.p`
		font-size: 1.4rem;
		font-weight: 400;
		line-height: 1.4;
	
		& + & {
			margin-top: 3rem;
		}

		@media (min-width: 768px) {
			font-size: 1.6rem;
		}

		@media (min-width: 1200px) {
			font-size: 2rem;
		}
`;

const Statement = ({ title, text, image }: statementProps) => {
	return (
		<Section>
			<CustomContainer>
				<ImageContainer>
					<StatementImage 
						src={image}
						alt={title}
					/>
				</ImageContainer>
				<StatementContent>
					<>
						<Title marginBottom={{ xl: '6rem', lg: '4rem', sm: '2rem'  }}>{title}</Title>
						{
							text.map((paragraph, index) => {
								return <StatementText key={index+'statement'}>{paragraph}</StatementText>
							})
						}
					</>
				</StatementContent>
			</CustomContainer>
		</Section>
	);
};

export default Statement;