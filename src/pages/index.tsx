import * as React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { RevealList } from '@/stories/RevealList/RevealList';

export default function Home() {
  const [activeHeading, setActiveHeading] = React.useState('webdev');
  const activatedHeadings: string[] = React.useMemo(() => ['webdev'], []);

  React.useEffect(() => {
    activatedHeadings.push(activeHeading);
  }, [activeHeading, activatedHeadings]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>willjohnston.tech</title>
      </Head>
      <RevealListContainer>
        <RevealList
          activeHeading={activeHeading}
          handleHeadingChange={(activeHeading: string) =>
            setActiveHeading(activeHeading)
          }
          activatedHeadings={activatedHeadings}
        />
      </RevealListContainer>
    </>
  );
}

const RevealListContainer = styled.main`
  overflow: scroll;
  height: 100%;
  padding: 0.5rem;
`;
