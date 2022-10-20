import AllowCookies from '@components/Cookies/Cookies';
import Feedback from '@components/Feedback/Feedback';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import { NextPage } from 'next';
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import GlobalStyles from '../styles/GlobalStyles'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type ComponentWithPageLayout = AppProps & {
	Component: NextPageWithLayout
};


function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
	const [allowCookies, setAllowCookies] = useState(false);

	const getLayout = Component.getLayout ?? ((page) => page)

	const handleAllowCookies = () => {
		localStorage.setItem('allowCookies', 'true');
		setAllowCookies(true);
	};

	useEffect(() => {
		let cookiesPermission = localStorage.getItem('allowCookies');
		
		if (cookiesPermission === 'true') setAllowCookies(true);
	}, [allowCookies]);


	return (
		<>
			<GlobalStyles />
			<AllowCookies allowCookies={allowCookies} handleAllowCookies={handleAllowCookies} />
			<Header />

			{ getLayout(<Component {...pageProps} />) }

			<Feedback toggleModal={() => console.log('weqwe')} />
			<Footer />
		</>
	)
};

export default MyApp;