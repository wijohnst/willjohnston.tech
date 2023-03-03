import Head from 'next/head';

import { NavBar } from '@/stories/NavBar/NavBar';
import { NavButton } from '@/stories/NavButton/NavButton';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>willjohnston.tech</title>
      </Head>
      <main>
        <NavBar />
        <NavButton pathname="" buttonText="TEST" isActive={true} />
      </main>
    </>
  );
}
