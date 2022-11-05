import { ReactNode } from 'react';
import styled from 'styled-components';
import Container, { StyledContainer } from './Container/Container';
import BackgroundBreaker from '/assets/images/components/Breaker/breaker.png';

const StyledBreaker = styled.aside`
	background: #282828 url(${BackgroundBreaker.src}) no-repeat;
	background-size: cover;
	color: #fff;
	text-align: center;
	font-size: 2rem;
	font-weight: 500;
	line-height: 1.3;

	${StyledContainer} {
		padding: 12rem 2rem;
	}

	b {
		color: #CD1D19;
	}

	@media (min-width: 768px) {
		font-size: 3.6rem;

		${StyledContainer} {
			padding: 20rem 15rem;
		}
	}

	@media (min-width: 992px) {
		font-size: 4rem;
	}
`;

const Breaker = ({ children }: { children: ReactNode }) => {
	return (
		<StyledBreaker>
			<Container>
				{children}
			</Container>
		</StyledBreaker>
	);
};

export default Breaker;