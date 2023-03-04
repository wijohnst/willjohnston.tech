import * as React from 'react';
import { useRouter } from 'next/router';

import { AppIcon } from '../AppIcon/AppIcon';
import { Nav } from './NavBar.style';
import CodeIcon from '../../../public/Icons/code-icon.svg';
import { NavButton } from '@/stories/NavButton/NavButton';

import { Breakpoints } from '@/types/app.types';
import { useMediaQuery } from '@/hooks/index';

type Props = {};

const NavBar = ({}: Props): React.ReactElement => {
  const router = useRouter();
  const isMobile = useMediaQuery(Breakpoints.mobile);

  return (
    <Nav>
      {!isMobile && (
        <>
          <NavButton
            pathname="About"
            buttonText="about"
            isActive={router.pathname === '/About'}
          />
          <NavButton
            pathname="Portfolio"
            buttonText="portfolio"
            isActive={router.pathname === '/Portfolio'}
          />
          <AppIcon handleClick={() => router.push('/')}>
            <CodeIcon />
          </AppIcon>
          <NavButton
            pathname="Services"
            buttonText="services"
            isActive={router.pathname === '/Services'}
          />
          <NavButton
            pathname="Blog"
            buttonText="blog"
            isActive={router.pathname === '/Blog'}
          />
        </>
      )}
      {isMobile && <span>ADD MOBILE NAV</span>}
    </Nav>
  );
};

export { NavBar };
