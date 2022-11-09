import Image from 'next/image';
import Link from 'next/link';
import styled from "styled-components";
import Container, { StyledContainer } from "../Container/Container";

const StyledFooter = styled.footer`
	background-color: #282828;
`;

const FooterLogo = styled.div`
	display: flex;
	align-items: center;
	flex: 1 0 100%;
	white-space: pre-line;

	@media(min-width: 480px) {
		flex-basis: 35rem;
	}
`;

const CompanyName = styled.p`
	font-weight: 500;
	font-size: 1.2rem;
	color: #fff;
	
	line-height: 1.2;
	margin-left: 2rem;

	span {
		display: block;
		font-weight: 400;
		margin-top: .8rem;
	}

	@media (min-width: 480px) {
		font-size: 1.6rem;
	}
`;

const FooterNavigation = styled.nav`
	flex-grow: 1;
`;

const FooterTop = styled.div`
	border-bottom: 1px solid #9A9A9A;
	padding-top: 5rem;
	padding-bottom: 5rem;

	${StyledContainer} {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}

	li a {
		white-space: nowrap;
	}
	
	@media (min-width: 768px) {
		${StyledContainer} {
			padding-top: 6rem;
			padding-bottom: 6rem;
		}
	}
`;


const FooterLinks = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	font-size: 1.4rem;
	font-weight: 500;
	color: #fff;

	li {
		width: 100%;
		padding-top: 2rem;
	}
	

	@media(min-width: 500px) {
		li {
			width: calc(50% - 4rem);
		}
	}

	li a {
		outline: 0;
		transition: color ease .3s;
	}

	li a:hover, li a:focus { color: #CD1D19; }
	li a:active { color: #E94C49; }

	@media(min-width: 1000px) {
		font-size: 1.6rem;
		font-weight: 400;
		
		li { 
			width: fit-content;
		}

		li + li { 
			margin-left: 2rem;
		}
	}
`;

const Reserved = styled.p`
	color: #9a9a9a;
	font-size: 1.2rem;
	line-height: 1.2;
	margin-top: 2rem;
	
	@media(min-width: 1000px) {
		font-size: 1.6rem;
		margin-right: 15rem;
		margin-top: 0;
	}
`;


const FooterBottom = styled.address`
	padding: 4rem 0;
	font-style: normal;

	${StyledContainer} {
		display: flex;
		flex-wrap: wrap-reverse;
		justify-content: space-between;
		align-items: center;
	}

	${FooterLinks} {
		li { 
			width: 100%; 
			margin-left: 0;
		}
	}

	@media(min-width: 1000px) {
		flex-wrap: wrap;
		${FooterLinks} {
			li { 
				width: fit-content;
				margin-left: inherit;
			}
		}
	}

	@media(min-width: 1200px) {
		li { padding-top: 0; }

		${FooterLinks} {
			flex-grow: 1;
		}
	}
`;

const Footer = () => {
	return (
		<StyledFooter>
			<FooterTop>
				<Container>
					<FooterLogo>
							<Image src="/logo.svg" loading='eager' width={53} height={65} alt="" layout="fixed" />
							<CompanyName>
								{'WORLD FAITH CONSTRUСTION\n ENGINEERING LIMITED'}
								<span>世信建築工程有限公司</span>
							</CompanyName>
					</FooterLogo>
					<FooterNavigation>
						<FooterLinks>
							<li>
								<Link href="/engineering">Engineering</Link>
							</li>
							<li>
								<Link href="/construction">Construction management</Link>
							</li>
							<li>
								<Link href="/industrial">Industrial development</Link>
							</li>
							<li>
								<Link href="/equipment">Equipment</Link>
							</li>
							<li>
								<Link href="/consulting">Consulting and trading</Link>
							</li>
						</FooterLinks>
					</FooterNavigation>
				</Container>
			</FooterTop>
			<FooterBottom>
				<Container>
					<Reserved>© 2020-2022 All rights reserved. WFCE Corporation</Reserved>
					<FooterLinks>
						<li>
							<a href="mailto:contact@wfcecorporation.com" aria-label="Contact us via email">contact@wfcecorporation.com</a>
						</li>
						<li>
							<a href="tel:+85239733919" arai-label="Contact us via phone call">+85239733919</a>
						</li>
						<li>
							<p>118 Connaught Road West Hong Kong</p>
						</li>
					</FooterLinks>
				</Container>
			</FooterBottom>
		</StyledFooter>
	)
};

export default Footer;