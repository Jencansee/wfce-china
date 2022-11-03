import { useEffect, useState } from 'react';
import { ComponentWithPageLayout } from 'types';
import GlobalStyles from '../styles/GlobalStyles';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import AllowCookies from '@components/Cookies/Cookies';
import { GlobalContextProvider } from 'contexts/globalFormContext';


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
		<GlobalContextProvider> 
			<GlobalStyles />
			<Header />

			{ getLayout(<Component {...pageProps} />) }

			<Footer />
			<AllowCookies allowCookies={allowCookies} handleAllowCookies={handleAllowCookies} />
		</GlobalContextProvider>
	)
};

export default MyApp;