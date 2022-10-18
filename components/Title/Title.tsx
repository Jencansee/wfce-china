import styled from "styled-components";

type marginBottom = {
	xl?: string,
	lg?: string,
	md?: string,
	sm?: string
}

type StyledTitleProps = {
	marginBottom?: marginBottom;
	alignCenter?: boolean;
	shouldDivide?: boolean;
}

const StyledTitle = styled.h2<StyledTitleProps>`
	font-size: 2.2rem;
	font-weight: 500;
	line-height: 1.2;
	text-align: ${({ alignCenter }) => alignCenter ? 'center' : 'left'};
	margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom.sm : ''};
	${({ shouldDivide }) => shouldDivide ? 'white-space: pre-line' : ''};


	@media (min-width: 548px) {
		font-size: 4rem;
		margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom.md : ''};
	}

	@media(min-width: 768px) {
		font-size: 3.8rem;
		margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom.lg : ''};
	}

	@media (min-width: 1200px) {
		font-size: 4.8rem;
		margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom.xl: ''};
	}
`
interface TitleProps {
	children: string;
	marginBottom?: marginBottom;
	alignCenter?: boolean;
	//* parse newliners, will be disable in 548px
	shouldDivide?: boolean;
}

const Title = ({ children, marginBottom, alignCenter, shouldDivide }: TitleProps) => {
	return (
		<StyledTitle 
			alignCenter={alignCenter} 
			marginBottom={marginBottom}
			shouldDivide={shouldDivide}
		>{children}</StyledTitle>
	)
};

export default Title;