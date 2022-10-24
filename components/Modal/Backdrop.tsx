import styled from "styled-components";
import { PropsWithChildren } from "react";

export interface BackdropProps { 
	handleClick?: () => void,
	opacity?: number,
	indexZ?: number,
	/** this is just for animation delay */
	revealState?: boolean,
};

export const StyledBackdrop = styled.div<BackdropProps>`
	position: fixed; top: 0; right: 0; bottom: 0; left: 0;
	background-color: rgba(0, 0, 0, ${({ opacity }) => opacity || .5});
	z-index: ${({ indexZ }) => indexZ || 50};
	min-height: 100vh; height: 100%; width: 100%;
	opacity: 0; transition: opacity .25s ease-in-out;

	opacity: ${({ revealState }) => revealState ? 1 : 0}; 
`;

const Backdrop = ({ 
	children, opacity, 
	handleClick, revealState, indexZ
}: PropsWithChildren<BackdropProps>) => (
	<StyledBackdrop onClick={handleClick} opacity={opacity} revealState={revealState} indexZ={indexZ}>
		{children}
	</StyledBackdrop>
);

export default Backdrop;