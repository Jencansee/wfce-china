import { FC, ReactNode } from "react";
import styled from "styled-components";

interface BackdropProps { 
	handleClick?: () => void,
	children?: ReactNode,
	opacity?: number,
	indexZ?: number,
};

const StyledBackdrop = styled.div<BackdropProps>`
	position: fixed; top: 0; right: 0; bottom: 0; left: 0;
	background-color: rgba(0, 0, 0, ${({ opacity }) => opacity || .5});
	z-index: ${({ indexZ }) => indexZ || 50};
	height: 100vh; width: 100%;
`;

const Backdrop: FC<BackdropProps> = ({ children, opacity, handleClick }) => (
	<StyledBackdrop onClick={handleClick} opacity={opacity}>
		{children}
	</StyledBackdrop>
);

export default Backdrop;