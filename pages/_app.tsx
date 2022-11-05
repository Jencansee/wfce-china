import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ComponentWithPageLayout } from 'types';
import GlobalStyles from '../styles/GlobalStyles';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import AllowCookies from '@components/Cookies/Cookies';
import { GlobalContextProvider } from 'contexts/globalFormContext';

function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
	const [allowCookies, setAllowCookies] = useState(false);
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const getLayout = Component.getLayout ?? ((page) => page)

	const handleAllowCookies = () => {
		localStorage.setItem('allowCookies', 'true');
		setAllowCookies(true);
	};

	//* Handle cookies
	useEffect(() => {
		let cookiesPermission = localStorage.getItem('allowCookies');
		
		if (cookiesPermission === 'true') setAllowCookies(true);
	}, [allowCookies]);


	//* Handle loading 
	useEffect(() => {
		const handleStart = (url: string) => url !== router.asPath && setLoading(true);
		const handleComplete = () => setTimeout(() => setLoading(false), 250);

		router.events.on('routeChangeStart', handleStart);
		router.events.on('routeChangeComplete', handleComplete);
		router.events.on('routeChangeError', handleComplete);

		return () => {
			router.events.off('routeChangeStart', handleStart);
			router.events.off('routeChangeComplete', handleComplete);
			router.events.off('routeChangeError', handleComplete);
		}
	}, [router]);

	return (
		<GlobalContextProvider> 
			<GlobalStyles />
			<Header isLoading={loading} />

			{ !loading && 
				<>
					{ getLayout(<Component {...pageProps} />) }
					<Footer />
				</>
			}

			<AllowCookies allowCookies={allowCookies} handleAllowCookies={handleAllowCookies} />
		</GlobalContextProvider>
	)
};

export default MyApp;