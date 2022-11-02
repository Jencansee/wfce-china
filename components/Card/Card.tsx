import Image, { StaticImageData } from "next/image";
import { PropsWithChildren, ReactNode, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const CardText = styled.p`
	font-size: 20px;
	font-weight: 300;
	line-height: 1.2;

	@media(min-width: 1200px) {
		white-space: pre-line;
	}
`;

const backgroundFillerOut = keyframes`
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
`;

export const StyledCard = styled.li<Card>`
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

	img {
		user-drag: none;
  	user-select: none;
	}

	::before {
		animation-duration: .5s;
		animation-timing-function: ease;
		animation-fill-mode: forwards;
		animation-name: ${({isHovered}) => isHovered ? backgroundFillerOut : 'none'};
	}
`;


type Card = {
	children: ReactNode;
	image?: StaticImageData;
	isHovered?: boolean;
};



const Card = ({ children, image }: PropsWithChildren<Card>) => {
	const [isHovered, setHovered] = useState(false);

	useEffect(() => {
		let timer: NodeJS.Timeout;
		timer = setTimeout(() => setHovered(false), 1500);

		return () => clearTimeout(timer);
	}, [isHovered]);

	return (
		<StyledCard
			isHovered={isHovered}
			onMouseLeave={() => setHovered(true)}
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