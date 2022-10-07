import { StaticImageData } from "next/image";
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

		&::before {
			content: '';
			background-color: #CD1D19;
			/* width: 80px; */
			/* height: 80px; */
			width: 166px;
			height: 166px;
			border-radius: 100%;
			/* border-top-left-radius: 100%; */
			position: absolute;
			/* bottom: 0; */
			/* right: 0; */
			bottom: -66px;
			right: -66px;
			animation: backgroundFiller .3s ease infinite;
			transition: width .3s ease-in-out, height .3s ease-in-out, border-top-right-radius .1s ease-in-out;
		}

		@keyframes backgroundFiller {
			0% {
				width: 166px;
				height: 166px;
			}
			25% {
				width: 50%;
				height: 50%;
			}
			50% {
				border-top-right-radius: 0;
				width: 100%;
				height: 150%;
			}
			100% {
				width: 150%;
				height: 200%;
			}
		}

		&:hover {
			&::before {
				border-top-right-radius: 0;
				width: 150%;
				height: 200%;
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

const Cards = ({ cards }: CardsProps) => {
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