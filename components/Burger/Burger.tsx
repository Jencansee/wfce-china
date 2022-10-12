import { FC } from "react";
import styled from "styled-components";

interface BurgerProps {
	isOpen: boolean, 
	clickHandler?: () => void 
}

export const BurgerWrapper = styled.button<BurgerProps>`
	width: 3.5rem; 
	height: 3.6rem;
	position: relative;
	cursor: pointer; flex-shrink: 0;
	border: none; background: none;

	span {
		display: block;
		position: absolute;
		width: 100%;
		height: .35rem;
		left: 0;
		border-radius: 3px;
		background-color: #282828;
		transition: .25s ease-in-out;

		&:not(:last-child) { margin-bottom: .6rem; }

		&:first-child { top: .5rem; }
		&:nth-child(2), &:nth-child(3) { top: 1.5rem; }
		&:last-child { top: 2.5rem; }

		${({ isOpen }) => isOpen && `
				&:first-child { width: 0%; top: 1.5rem; left: 50%; }
				&:last-child { width: 0%; top: 1.5rem; left: 50%; }
				&:nth-child(2) { transform: rotate(45deg); }
				&:nth-child(3) { transform: rotate(-45deg); }
		`}
	}
`;

const Burger: FC<BurgerProps> = ({ isOpen, clickHandler }) => {
	return (
		<BurgerWrapper onClick={clickHandler} isOpen={isOpen}>
			<span />
			<span />
			<span />
			<span />
		</BurgerWrapper>
	)
};

export default Burger;