import { PropsWithChildren } from "react";
import styled from "styled-components";

export const StyledSection = styled.section<SectionContainerProps>`
	padding: ${({paddingTop, paddingBottom}) => `${paddingTop?.beforeTablet || '12rem'} 0 ${paddingBottom?.beforeTablet || '12rem'}`};

	@media(min-width: 768px) {
		padding: ${({paddingTop, paddingBottom}) => `${paddingTop?.afterTablet || '20rem'} 0 ${paddingBottom?.afterTablet || '20rem'}`};
	}
`;

type paddingTwoValues = {
	afterTablet: string;
	beforeTablet: string;
}

interface SectionContainerProps {
	paddingTop?: paddingTwoValues;
	paddingBottom?: paddingTwoValues;
};

const Section = ({ 
	children, paddingTop, paddingBottom 
}: PropsWithChildren<SectionContainerProps>) => {
	return (
		<StyledSection paddingTop={paddingTop} paddingBottom={paddingBottom}>
			{children}
		</StyledSection>
	);
};

export default Section;