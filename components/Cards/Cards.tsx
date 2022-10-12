import { StaticImageData } from "next/image";
import { FC } from "react";
import styled from "styled-components";
import Card, { StyledCard } from "../Card/Card";

type Cards = {
	text: string;
	image?: StaticImageData;
}

interface CardsProps {
	cards: Cards[];
}

const StyledCards = styled.ul`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	row-gap: 2.5rem;
	
	
	${StyledCard} {
		flex: 0 0 100%;
		position: relative;
		overflow: hidden;
		transition: color .4s ease;
		img { transition: filter .1s .2s ease; }
		
		&::before {
			content: '';
			background-color: #CD1D19;
			width: 133px;
			height: 133px;
			border-radius: 100%;
			position: absolute;
			bottom: -66px;
			right: -66px;
			animation: backgroundFillerOut .5s ease forwards;
			transition: width .5s ease-in-out, height .5s ease-in-out, bottom .5s ease-in-out, right .5s ease-in-out;
		}

		//#region hover fill animation
		@keyframes backgroundFiller {
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
		}

		@keyframes backgroundFillerOut {
			0% {
				height: 992px;
				width: 992px;
				bottom: -496px;
				right: -496px;
			}

			100% {
				width: 133px;
				height: 133px;
				bottom: -66px;
				right: -66px;
			}
		}
		//#endregion hover fill animation

		&:hover {
			color: #fff;		
			border-color: #CD1D19;
			background-color: #CD1D19;
			img { filter: invert(1) brightness(2); }

			transition: 
				background-color .4s .1s ease, 
				border-color .1s ease;
			
			&::before {
				animation: backgroundFiller .5s ease forwards;
				border-top-right-radius: 0;
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

const Cards: FC<CardsProps> = ({ cards }) => {
	return (
		<StyledCards>
		{
			cards.map(({ text, image }, idx) => (
				<Card
					as="li"
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