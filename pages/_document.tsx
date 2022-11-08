import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import { ReactElement } from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MainDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
	};

	render(): ReactElement {
		return (
			<Html lang="en">
				<Head>
					<link rel="icon" href="/favicon.ico" sizes="any" />
					<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://www.wfcengineering.com/" />
					<meta property="og:site_name" content="WFCE" />
	
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:title" property="og:title" content="World Faith Construction Engineering Limited" />
					<meta name="twitter:description" property="og:description" content="WFCE is an international engineering company" />
					<meta name="twitter:image" property="og:image" content="/logo512.png" />
					<meta name="twitter:image:alt" property="og:image:alt" content="WFCE logo" />
	
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"/>
				</Head>
				<body>
					<Main />
					<div id="modal"></div>
					<NextScript />
				</body>
			</Html>
		)
	}
};