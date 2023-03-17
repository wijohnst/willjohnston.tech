import * as React from 'react';
import type { AppProps } from 'next/app';

import { NavBar } from '@/stories/NavBar/NavBar';
import { Footer } from '@/stories/Footer/Footer';
import GlobalStyle from '@/styles/globalstyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
		<>
			<GlobalStyle />
			<NavBar />
			<Component {...pageProps} />
			<Footer />
		</>
  );
}

