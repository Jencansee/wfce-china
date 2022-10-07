import Image, { StaticImageData } from "next/image";
import { ComponentType, ReactNode } from "react";
import styled from "styled-components";

const CardText = styled.p`
	font-size: 20px;
	font-weight: 300;
	line-height: 1.2;

	@media(min-width: 1200px) {
		white-space: pre-line;
	}
`;

export const StyledCard = styled.div`
	display: flex;
	align-items: center;
	padding: 4rem;
	background-color: #FFFFFF;
	border: 1px solid #2D2D2D;
	border-radius: 20px;


	${CardText} {
		z-index: 3;
		margin-left: 2rem;
	}

	span {
		z-index: 3;
		flex-shrink: 0;
	}

	&:hover {
		/* background-color: #CD1D19; */
		color: #FFFFFF;

		img {
			filter: invert(1) brightness(2);
		}
	}
`;


type Card = {
	children: ReactNode;
	image?: StaticImageData;
	as?: string | ComponentType<any>;
};

const Card = ({ children, image, as }: Card ) => {
	return (
		<StyledCard
			as={as}
		>
			{
				image &&
				<Image
					alt=""
					layout="fixed"
					src={image}
					width={40}
					height={40}
				/>
			}
			<CardText>{children}</CardText>
		</StyledCard>
	);
};

export default Card;