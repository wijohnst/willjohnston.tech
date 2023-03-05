import * as React from 'react';
import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import { NavBar } from '@/stories/NavBar/NavBar';
import { Footer } from '@/stories/Footer/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
