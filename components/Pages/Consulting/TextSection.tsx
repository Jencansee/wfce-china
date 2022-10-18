import Container from "@components/Container/Container";
import Section from "@components/Section/Section";
import styled from "styled-components";

interface TextSectionProps {
	title: string;
	description: string[];
}


const ContentWrapper = styled.div`
	display: flex; 
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
`;

const StyledTitle = styled.h2`
	font-size: 2.2rem;
	font-weight: 500;
	line-height: 1.2;
	margin-bottom: 4rem;

	@media(min-width: 576px) {
		margin-bottom: 6rem;
		font-size: 4rem;
	}

	@media(min-width: 992px) {
		white-space: pre-line;
		font-size: 4.8rem;
		margin-bottom: 0;
	}
`;

const DescriptionHolder = styled.div`
	width: 100%;

	@media(min-width: 992px) {
		width: 46%;
	}
`;

const StyledDescription = styled.p`
	display: block;
	font-size: 1.4rem;
	font-weight: 400;
	line-height: 1.4;

	& + & {
		margin-top: 2rem;
	}

	@media(min-width: 576px) {
		font-size: 2rem;
	}
`;

const TextSection = ({ title, description }: TextSectionProps) => {
	return (
		<Section>
			<Container>
				<ContentWrapper>
					<StyledTitle>{title}</StyledTitle>
					<DescriptionHolder>
						{
							description && description.map((text, idx) => (
								<StyledDescription key={`${idx}descriptionTextSection`}>{ text }</StyledDescription>
							))
						}
					</DescriptionHolder>
				</ContentWrapper>
			</Container>
		</Section>
	)
};

export default TextSection;