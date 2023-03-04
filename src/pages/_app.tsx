import * as React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NavBar } from '@/stories/NavBar/NavBar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
