import Image from "next/image";
import styled from "styled-components";
import { StyledSection } from "../Section/Section";
import  Container, { StyledContainer } from "../Container/Container";

//* icons
import EmailIcon from "/assets/images/ui/mail.svg";
import PhoneIcon from "/assets/images/ui/phone.svg";
import NavIcon from "/assets/images/ui/location.svg";
import { useGlobalContext } from "contexts/globalFormContext";

const FeedbackWrapper = styled(StyledSection)`
	${StyledContainer} {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	border: 1px solid #282828;
	border-radius: 20px;
	margin-top: 3rem;
	padding: 3rem;
	width: 100%;


	@media(min-width: 768px) {
		padding: 4rem;
	}

	@media(min-width: 1200px) {
		margin-top: 0;
		width: calc(50% - 3rem);
	}
`;

const CardTitle = styled.h2`
	font-size: 2rem;
	line-height: 1.2;
	font-weight: 500;
	margin-bottom: 2rem;

	@media(min-width: 576px) {
		font-size: 3.6rem;
	}

	@media(min-width: 768px) {
		font-size: 4rem;
	}
`;

const CardDesc = styled.p`
	font-size: 1.4rem;

	@media(min-width: 576px) {
		font-size: 2rem;
	}
`;

const TextWithImage = styled.a`
	display: flex;
	font-size: 1.4rem;

	//? email is so enormous, so we need style for that
	p.email { font-size: 1.2rem; }

	& + & {
		margin-top: 2rem;
	}

	@media(min-width: 576px) {
		&, p.email { font-size: 2rem; }
		align-items: center;
	}
`;

const ImageWrapper = styled.div`
	width: 15px; height: 15px;
	margin-right: 1rem;

	@media(min-width: 576px) { width: 20px; height: 20px;	}
`;

//* cool btn
const Button = styled.button`
	z-index: 2;
	position: relative;
	font-size: 1.6rem;
	line-height: 1.2;
	font-weight: 700;
	color: #282828;
	padding: 2rem 0 2.1rem;
	padding-right: 7rem;
	line-height: 1;
	transition: padding ease .3s, color ease .3s;
	background: transparent;

	margin-top: 4rem;


	::before {
		content: '';
		z-index: -1;
		position: absolute;
		top: 50%; right: 0;
		transform: translateY(-50%);
		width: 48px; height: 48px;
		border-radius: 30px;
		background-color: #CD1D19;
		box-shadow: inset -2px -4px 4px rgba(0, 0, 0, 0.2), inset 2px 4px 4px rgba(255, 255, 255, 0.3);
		transition: width ease .3s;
	}

	::after {
		content: '';
		z-index: 1;
		position: absolute;
		top: 50%; right: 1.8rem;
		width: 2.8rem; height: 2rem;
		transform: translateY(-50%);
		background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAzNCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMiA4Ljc1QzEuMzA5NjQgOC43NSAwLjc1IDkuMzA5NjQgMC43NSAxMEMwLjc1IDEwLjY5MDQgMS4zMDk2NCAxMS4yNSAyIDExLjI1TDIgOC43NVpNMzIuODgzOSAxMC44ODM5QzMzLjM3MiAxMC4zOTU3IDMzLjM3MiA5LjYwNDI3IDMyLjg4MzkgOS4xMTYxMUwyNC45Mjg5IDEuMTYxMTZDMjQuNDQwOCAwLjY3MzAwOSAyMy42NDkzIDAuNjczMDA5IDIzLjE2MTIgMS4xNjExNkMyMi42NzMgMS42NDkzMiAyMi42NzMgMi40NDA3OCAyMy4xNjEyIDIuOTI4OTNMMzAuMjMyMiAxMEwyMy4xNjEyIDE3LjA3MTFDMjIuNjczIDE3LjU1OTIgMjIuNjczIDE4LjM1MDcgMjMuMTYxMiAxOC44Mzg4QzIzLjY0OTMgMTkuMzI3IDI0LjQ0MDggMTkuMzI3IDI0LjkyODkgMTguODM4OEwzMi44ODM5IDEwLjg4MzlaTTIgMTEuMjVMMzIgMTEuMjVMMzIgOC43NUwyIDguNzVMMiAxMS4yNVoiIGZpbGw9IndoaXRlIi8+PC9zdmc+") no-repeat;
		background-size: 100% 100%;
	}

	:hover, :focus {
		padding-left: 2rem;
		color: #fff;

		::before {
			width: 100%;
		}
	}

	:active {
		::before { background-color: #E94C49; }
	}

	@media(min-width: 768px) {
		font-size: 2rem;
		margin-top: 6rem;
		::before { width: 59px; height: 59px; }
		::after { width: 4rem; height: 2rem; }
	}
`;

const Feedback = ({
	handleClick 
}: { handleClick: () => void }) => {
	return (
		<FeedbackWrapper>
			<Container>
				<Card>
					<div>
						<CardTitle>JOIN US</CardTitle>
						<CardDesc>Become a member of our team</CardDesc>
					</div>
					<Button 
						type="button" 
						aria-label="Open our contact form" 
						onClick={handleClick}
					>
						Go to form
					</Button>
				</Card>
				<Card>
					<div>
						<CardTitle as="h3">CONTACT US</CardTitle>
						<TextWithImage href="mailto:contact@wfcecorporation.com" aria-label="Contact via email">
							<ImageWrapper>
								<Image 
									src={EmailIcon}
									loading='eager'
									sizes="(min-width: 576px) 20px, 15px"
									alt=""
									layout="responsive"
								/>
							</ImageWrapper>
							<p className="email">contact@wfcecorporation.com</p>
						</TextWithImage>
						<TextWithImage href="tel:+12366655447" aria-label="Contact via phone">
							<ImageWrapper>
								<Image 
									src={PhoneIcon}
									loading='eager'
									sizes="(min-width: 576px) 20px, 15px"
									alt=""
									layout="responsive"
								/>
							</ImageWrapper>
							<p>+12366655447</p>
						</TextWithImage>
						<TextWithImage as="div">
							<ImageWrapper>
								<Image 
									alt=""
									src={NavIcon}
									loading='eager'
									layout="responsive"
									sizes="(min-width: 576px) 20px, 15px"
								/>
							</ImageWrapper>
							<p>118 Connaught Road West Hong Kong</p>
						</TextWithImage>
					</div>
					<Button 
						type="button" 
						aria-label="Open our contact form" 
						onClick={handleClick}
					>
						Go to form
					</Button>
				</Card>
			</Container>
		</FeedbackWrapper>
	);
};

export default Feedback;