import Container, { LargeContainer } from "@components/Container/Container";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styled from "styled-components";

//#region styled
const StyledFirstScreen = styled.section`
	position: relative;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	padding-top: 11rem;

	::before {
		z-index: 1;
		content: "";
		position: absolute;
		top: 0; left: 0;
		width: 100%;
		height: 100%;
		background-color: #000;
		opacity: .3;
	}
`;

const Breadcrumb = styled.nav`
	font-size: 1.2rem;
	line-height: 1.2;
	font-weight: 500;
	padding-top: 2rem;
	position: relative;
	z-index: 3;
	
	@media(min-width: 576px) {
		font-size: 1.6rem;
		font-weight: 400;
		padding-top: 3rem;
	}
`;

const ContentWrapper = styled.div`
	display: flex; 
	flex-wrap: wrap;
	justify-content: space-between;
	color: #fff;
	
	position: relative;
	z-index: 3;

	padding-top: 8.6rem;
	padding-bottom: 12rem;
	
	@media(min-width: 576px) {
		padding-top: 15rem;
		padding-bottom: 20rem;
	}

	@media(min-width: 768px) {
		padding-bottom: 23rem;
	}
`;

const StyledTitle = styled.h2`
	font-size: 2.9rem;
	font-weight: 500;
	line-height: 1.2;
	margin-bottom: 2rem;

	@media(min-width: 576px) {
		white-space: pre-line;
		margin-bottom: 4rem;
		font-size: 4.2rem;
	}

	@media(min-width: 992px) {
		font-size: 5.2rem;
		margin-bottom: 0;
	}
`;

const DescriptionHolder = styled.div`
	width: 100%;

	@media(min-width: 992px) {
		width: 50%;
	}
`;

const StyledDescription = styled.p`
	display: block;
	font-size: 1.4rem;
	font-weight: 400;
	line-height: 1.4;

	& + & {
		margin-top: 2rem;
	}

	@media(min-width: 576px) {
		font-size: 2rem;
	}
`;


const OrderedList = styled.ol`
	li { 
		display: inline;
		color: #fff;
	}
`;

//#endregion styled

interface FirstScreenProps {
	backgroundImage: StaticImageData;
	pageUrl: string;
	pageTitle: string;
	/** sometimes breadcrump doesn't named the same way as page title */
	breadcrumbTitle?: string;
	description?: string[];
};

const CommonFirstScreen = ({ 
	pageUrl, pageTitle, description,
	backgroundImage, breadcrumbTitle 
}: FirstScreenProps) => {
	return (
		<StyledFirstScreen>
				<Image
					alt=""
					layout="fill"
					quality={100}
					priority={true}
					objectFit="cover"
					src={backgroundImage.src}
					objectPosition="center center"
				/>
			<LargeContainer>
				<Breadcrumb aria-label="breadcrumb">
					<OrderedList>
						<li>
							<Link href="/">Home</Link>{' — '}
						</li>
						<li>
							<Link href={`/${pageUrl}`} aria-current="page">{ breadcrumbTitle || pageTitle }</Link>
						</li>
					</OrderedList>
				</Breadcrumb>
			</LargeContainer>
			<Container>
				<ContentWrapper>
					<StyledTitle>{ pageTitle.toLocaleUpperCase() }</StyledTitle>
					<DescriptionHolder>
						{
							description && description.map(
								(text, idx) => <StyledDescription key={`${idx}descriptionFS`}>{ text }</StyledDescription>
							)
						}
					</DescriptionHolder>
				</ContentWrapper>
			</Container>
		</StyledFirstScreen>
	);
};

export default CommonFirstScreen;