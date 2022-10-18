import { BackdropProps, StyledBackdrop } from "@components/Modal/Backdrop";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface NavigationProps {
	isOpen: boolean;
}

const BurgerWrapper = styled.div<NavigationProps>`
	position: fixed;
	top: 0; left: 0;
	width: 100%;
	height: calc(100vh - 100px);
	background: rgba(0,0,0, .5);
	border-bottom: 1px solid #282828;
	margin-top: 100px;
	display: flex;
	z-index: 900;
	pointer-events: all;
	transition: transform ease .3s;
	
	transform: translateX(100%); 
	transform: ${({ isOpen }) => isOpen && 'translateX(0)'};

	@media(min-height: 475px) { height: auto; }
`;

const NavigationContent = styled.div`
	position: relative;
	z-index: 50;
	width: 100%;
	height: auto;
	background-color: #fff;
	padding: 3rem 0;
	overflow: auto;
`;

const Links = styled.ul`
	li {
		display: block;
		width: 100%;
		font-size: 1.8rem;
		line-height: 1.5;
		font-weight: 400;
		padding: 2rem;

		a { display: block; width: 100%; }

		:first-child {
			padding-top: 3rem;
		}
	}

	@media(min-width: 576px) {
		li {
			font-size: 2.4rem;
			padding-bottom: 3rem;
		}
	}
`;

const NavBackdrop = styled(StyledBackdrop)<BackdropProps>`
	margin-top: 100px;
`;



const BurgerNavigation = ({ isBurgerOpen, burgerToggler }: {
		isBurgerOpen: boolean, 
		burgerToggler: () => void 
}) => {


	const [anim, setAnim] = useState(false);

	useEffect(() => {
		let timer: NodeJS.Timeout;
		timer = setTimeout(() => setAnim(true), 150);

		return () => clearTimeout(timer);
	}, [isBurgerOpen]);

	return (
		<>
			<NavBackdrop indexZ={300} revealState={true} onClick={burgerToggler} ></NavBackdrop>
			<BurgerWrapper
				isOpen={anim}
				onClick={burgerToggler}
			>
				<NavigationContent>
					<Links>
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
					</Links>
				</NavigationContent>
			</BurgerWrapper>
			<style jsx>{`:global(body) { overflow: hidden; }`}</style>
		</>
	);
};

export default BurgerNavigation;