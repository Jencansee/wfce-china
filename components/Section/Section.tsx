import { ReactNode } from "react";
import styled from "styled-components";

const StyledSection = styled.section`
	padding: 12rem 0;

	@media(min-width: 768px) {
		padding: 20rem 0;
	}
`;

const Section = ({ children }: { children: ReactNode }) => {
	return (
		<StyledSection>
			{children}
		</StyledSection>
	);
};

export default Section;