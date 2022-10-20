import { StaticImageData } from "next/image";
import styled, { keyframes } from "styled-components";
import Card, { StyledCard } from "../Card/Card";

type Cards = {
	text: string;
	image?: StaticImageData;
}

const backgroundFillerIn = keyframes`
	0% {
		width: 133px;
		height: 133px;
		bottom: -66px;
		right: -66px;
	}

	100% {
		height: 992px;
		width: 992px;

		bottom: -496px;
		right: -496px;
	}
`;

const StyledCards = styled.ul`
	display: flex;
	flex-wrap: wrap;
	row-gap: 2.5rem;
	column-gap: 2.25rem;
	
	
	${StyledCard} {
		flex: 0 0 100%;
		position: relative;
		overflow: hidden;
		transition: color .4s ease;
		img { transition: filter .1s .2s ease; }
		
		::before {
			content: '';
			background-color: #CD1D19;
			width: 133px;
			height: 133px;
			border-radius: 100%;
			position: absolute;
			bottom: -66px;
			right: -66px;
			transition: width .5s ease-in-out, height .5s ease-in-out, bottom .5s ease-in-out, right .5s ease-in-out;
		}

		&:hover {
			color: #fff;		
			border-color: #CD1D19;
			background-color: #CD1D19;
			img { filter: invert(1) brightness(2); }

			transition: 
				background-color .4s .1s ease, 
				border-color .1s ease;
			
			::before {
				animation-name: ${backgroundFillerIn};
			}
		}

		@media(min-width: 648px) {
			flex: 0 0 calc(50% - 1.5rem);
		}

		@media(min-width: 992px) {
			flex: 0 0 calc(33.33% - 1.5rem);
		}
	}
`;

const Cards = ({ cards }: { cards: Cards[]}) => {
	return (
		<StyledCards>
		{
			cards.map(({ text, image }, idx) => (
				<Card
					key={idx+'card@cards'}
					image={image}
				>
					{text}
				</Card>
			))
		}
		</StyledCards>
	);
}

export default Cards;