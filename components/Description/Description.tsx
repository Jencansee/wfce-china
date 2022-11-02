import styled from "styled-components";

type marginBottom = {
	sm?: string;
	md?: string;
}

interface DescriptionProps {
	textAlign?: string;
	children: string;
	marginBottom?: marginBottom;
}

const StyledDescription = styled.p<DescriptionProps>`
	font-size: 1.8rem;
	font-weight: 400;
	line-height: 1.2;
	text-align: ${({ textAlign }) => textAlign || 'center'};
	margin-bottom: ${({ marginBottom }) => marginBottom?.sm || '4rem'};

	@media(min-width: 576px) {
		font-size: 2.4rem;
		margin-bottom: ${({ marginBottom }) => marginBottom?.md || '6rem'};
		white-space: pre-line;
	}
`;

const Description = ({ children, textAlign, marginBottom }: DescriptionProps) => {
	return <StyledDescription textAlign={textAlign} marginBottom={marginBottom}>{children}</StyledDescription>
};

export default Description;