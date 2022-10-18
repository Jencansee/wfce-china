import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { LargeContainer, StyledContainer } from '@components/Container/Container';
import Burger, { BurgerWrapper } from '@components/Burger/Burger';
import BurgerNavigation from '@components/Burger/BurgerNavigation';


interface HeaderProps {
	isHidden?: boolean;
};

const StyledHeader = styled.header<HeaderProps>`
	position: fixed;
	top: 0; left: 0;
	z-index: 200;
	width: 100%;
	padding: 17px 0;
	background-color: #fff;
	border-bottom: 1px solid #9A9A9A;
	transition: transform .3s ease;
	transform: ${({ isHidden }) => isHidden ? 'translateY(-100%)' : 'translateY(0)'}; 
	
	${StyledContainer} {
		display: flex; justify-content: space-between; align-items: center;
	}

	${BurgerWrapper} {
		@media(min-width: 1200px) {
			display: none;
			visibility: hidden;
		}
	}
`;

const StyledH1 = styled.h1`
	display: none;

	@media(min-width: 320px) {
		display: flex;
    flex-flow: column;
    justify-content: space-around;
		margin-left: 1.5rem;	
		font-size: 1.2rem;
		font-weight: 500;
		line-height: 1.2;

		span {
			margin-top: .8rem;
			display: block;
			line-height: 1;
			font-weight: 400;
		}
	}

	@media(min-width: 380px) {
		width: 25rem;
		font-size: 1.5rem;
		margin-left: 2rem;
	}
`;

const HeaderLogo = styled.a`
	display: flex;
`;

const List = styled.ul`
	li {
		display: inline-block;
		font-weight: 400;
	}

	li + li { margin-left: 2rem; }

	li a {
		font-size: 1.4rem;
		outline: none;
		position: relative;
		padding-bottom: 10px;
		transition: font-size ease .3s;

		
		::before {
			content: '';
			display: block;
			position: absolute;
			bottom: 0;
			left: 0;

			opacity: 0;
			width: 0;
			height: 3px;
			border-radius: 10px;
			transition: width cubic-bezier(.2,.05,.48,.89) .35s, color ease .35s, opacity ease .35s;
			background-color: #CD1D19;
		}

		&:hover::before, &:focus::before {
			opacity: 1; width: 100%;
		}

		&:active, &:focus {
			color: #CD1D19;
		}

		@media(min-width: 1300px) {
			font-size: 1.6rem;
		}
	}

	@media(min-width: 1400px) {
		li + li {
			margin-left: 6rem;
		}
	}
`;

const Navigation = styled.nav`
	display: none;
	visibility: hidden;

	@media(min-width: 1200px) {
		display: block;
		visibility: visible;
	}
`;

const Header = () => {
	const [navOpen, setNavOpen] = useState(false);
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		const onScroll = () => setOffset(window.pageYOffset);
		
		//? clean up code
		window.removeEventListener('scroll', onScroll);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const handleBurgerClick = () => setNavOpen(!navOpen);

	return (
		<StyledHeader
			isHidden={offset > 100}
		>
			<LargeContainer>
				<Link href="/">
					<HeaderLogo href='/' onClick={() => setNavOpen(false)}>
						<Image src="/logo_black.svg" loading="eager" quality={100} layout="fixed" width={53} height={65} alt="WFCE" />
						<StyledH1>
							WORLD FAITH CONSTRUСTION ENGINEERING LIMITED
							<span>華信建築工程有限公司</span>
						</StyledH1>
					</HeaderLogo>
				</Link>

				<Navigation>
					<List>
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
					</List>
				</Navigation>

				<Burger isOpen={navOpen} clickHandler={handleBurgerClick} />
				
				{ navOpen && 
					<BurgerNavigation 
						isBurgerOpen={navOpen}
						burgerToggler={handleBurgerClick}
					/>
				}
			</LargeContainer>
		</StyledHeader>
	);
};


export default Header;