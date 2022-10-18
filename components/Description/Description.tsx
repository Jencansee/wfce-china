import styled from "styled-components";

const StyledDescription = styled.p`
	font-size: 1.8rem;
	font-weight: 400;
	line-height: 1.2;
	text-align: center;
	margin-bottom: 4rem;

	@media(min-width: 576px) {
		font-size: 2.4rem;
		margin-bottom: 6rem;
		white-space: pre-line;
	}
`;

const Description = ({ children }: { children: string }) => {
	return <StyledDescription>{children}</StyledDescription>
};

export default Description;