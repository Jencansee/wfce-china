import Button, { DefaultButton } from "@components/Buttons/Button";
import Image from "next/image";
import styled from "styled-components";
import CookiesImg from "/assets/images/contour/cookies.svg";

const CookiesWrapper = styled.div`
	background-color: #fff;
	position: fixed;
	bottom: 1rem; left: 1rem;
	z-index: 20;
	padding: 2rem;

	border: 1px solid #282828;
	border-radius: 20px;

	@media(min-width: 768px) {
		padding: 3rem 4rem;
		bottom: 2rem; left: 2rem;
	}
`;

const Cookies = styled.div`
	display: flex;
	align-items: center;
	flex-flow: column wrap;
	gap: 1rem 2rem;

	p {
		font-size: 2.6rem;
		font-weight: 500;
	}

	${DefaultButton} {
		@media(min-width: 768px) {
			padding: 1.5rem 4rem;
		}
	}

	@media(min-width: 768px) {
		flex-flow: row nowrap;
	}
`;

const CookieIcon = styled.div`
	flex-shrink: 0;
`;

interface CookiesProps {
	allowCookies: boolean;
	handleAllowCookies: () => void;
}

const AllowCookies = ({
	allowCookies,
	handleAllowCookies
}: CookiesProps) => {
	return (
		<>
			{
				!allowCookies && 
				<CookiesWrapper>
					<Cookies>
						<CookieIcon>
							<Image
								src={CookiesImg}
								alt=""
								width={40}
								height={40}
							/>
						</CookieIcon>
						<p>We use cookies</p>
						<Button handleClick={handleAllowCookies}>Accept</Button>
					</Cookies>
				</CookiesWrapper>
			}
		</>
	)
};

export default AllowCookies;