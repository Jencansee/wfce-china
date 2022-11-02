import Head from 'next/head';
import styled from 'styled-components';
import { PropsWithChildren } from 'react';
import Container from '@components/Container/Container';

const ErrorWrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 14rem 0 7rem;

	@media(min-width: 545px) {
		min-height: calc(100vh - 38.6rem);
		padding: 22rem 0;
	}
`;

const ErrorLayout = ({
	children
}: PropsWithChildren) => (
  <>
    <Head>
      <title>WFCE - Not Found</title>
			<meta property="og:title" content="WORLD FAITH CONSTRUСTION ENGINEERING LIMITED" />
			<meta name="description" content="WORLD FAITH CONSTRUСTION ENGINEERING LIMITED" />
			<meta property="og:description" content="WFCE" />
    </Head>
		<main>
      <Container>
				<ErrorWrapper>
					{ children }
				</ErrorWrapper>
			</Container>
    </main>
  </>
);

export default ErrorLayout;