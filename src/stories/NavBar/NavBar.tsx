import * as React from 'react';
import { useRouter } from 'next/router';

import { AppIcon } from '../AppIcon/AppIcon';
import { SemanticElement, IconWrapper } from './NavBar.style';
import CodeIcon from '../../../public/Icons/code-icon.svg';
import { NavButton } from '@/stories/NavButton/NavButton';

type Props = {};

const NavBar = ({}: Props): React.ReactElement => {
  const router = useRouter();

  return (
    <SemanticElement>
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
      <IconWrapper>
        <AppIcon handleClick={() => router.push('/')}>
          <CodeIcon />
        </AppIcon>
      </IconWrapper>
      <NavButton
        pathname="Services"
        buttonText="services"
        isActive={router.pathname === '/Services'}
      />
      <NavButton
        pathname="blog/"
        buttonText="blog"
        isActive={router.pathname === '/Blog'}
      />
    </SemanticElement>
  );
};

export { NavBar };
