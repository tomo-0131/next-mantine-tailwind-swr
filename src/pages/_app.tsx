import React from 'react';

import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { MantineProvider } from '@mantine/core';

import Router from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Page title</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>

			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					colorScheme: 'light',
					loader: 'bars'
				}}
			>
				<Component {...pageProps} />
			</MantineProvider>
		</>
	);
}

export default MyApp;
