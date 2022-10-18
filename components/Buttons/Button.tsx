import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";


interface ButtonProps {
	children: string;
	handleClick?: () => void;
	type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export const DefaultButton = styled.button`
	font-size: 1.6rem;
	color: #fff;
	font-weight: 700;
	line-height: 1;
	border-radius: 30px;
	padding: 1.8rem 6rem;
	background-color: #CD1D19;
	box-shadow: inset -2px -4px 4px rgba(0, 0, 0, 0.2), inset 2px 4px 4px rgba(255, 255, 255, 0.3);

	transition: 
		box-shadow .25s ease, 
		background-color .25s ease;
	
	//FIXME maybe remove all outline
	outline: none;

	&:hover, &:focus {
		background-color: #E94C49;
	}

	&:active, &:target {
		transition: 0s background-color;
		background-color: #CD1D19;
	}
	
	@media (min-width: 768px) {
		padding: 1.8rem 6rem;
		font-size: 2rem;
	}
`;

const Button = ({ children, type, handleClick }: ButtonProps) => {
	return (
		<DefaultButton
			onClick={handleClick}
			type={type || 'button'} 
		>
			{ children }
		</DefaultButton>
	);
};



export default Button;