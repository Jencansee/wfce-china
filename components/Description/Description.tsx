import styled from "styled-components";

interface DescriptionProps {
	textAlign?: string;
	children: string;
}

const StyledDescription = styled.p<DescriptionProps>`
	font-size: 1.8rem;
	font-weight: 400;
	line-height: 1.2;
	text-align: ${({ textAlign }) => textAlign || 'center'};
	margin-bottom: 4rem;

	@media(min-width: 576px) {
		font-size: 2.4rem;
		margin-bottom: 6rem;
		white-space: pre-line;
	}
`;

const Description = ({ children, textAlign }: DescriptionProps) => {
	return <StyledDescription textAlign={textAlign}>{children}</StyledDescription>
};

export default Description;