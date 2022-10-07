import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Container, { StyledContainer } from '../Container/Container';
// import styles from './Header.module.css';

const StyledHeader = styled.header`
	padding: 17px 0;
	background-color: #fff;
	border-bottom: 1px solid #9A9A9A;
	${StyledContainer} {
		display: flex; justify-content: space-between; align-items: center;
	}
`;


const StyledH1 = styled.h1`
	margin-left: 2rem;	
	font-size: 1.5rem;
	font-weight: 500;
	line-height: 1.2;
	width: 25rem;

	span {
		margin-top: .8rem;
		display: block;
		line-height: 1;
		font-weight: 400;
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
	li + li {
		margin-left: 6rem;
	}

	li a {
		outline: none;
		position: relative;
		padding-bottom: 10px;

		&::before {
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
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<Link href="/qwe">
					<HeaderLogo href='/qwe'>
						<Image src="/logo_black.svg" loading='eager' width={53} height={65} alt="" />
						<StyledH1>
							WORLD FAITH CONSTRUСTION ENGINEERING LIMITED
							<span>華信建築工程有限公司</span>
						</StyledH1>
					</HeaderLogo>
				</Link>
				<nav>
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
				</nav>
			</Container>
		</StyledHeader>
	);
};


export default Header;