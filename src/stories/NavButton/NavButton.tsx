import * as React from 'react';

import Link from 'next/link';

import { NavLink } from '@/types';
import { Element, LinkContent } from './NavButton.style';

type Props = NavLink & {
  /** Is the current button selected? */
  isActive: boolean;
};

const NavButton = ({
  pathname,
  buttonText,
  isActive,
}: Props): React.ReactElement => {
  return (
    <Element href={`/${pathname}`}>
      <LinkContent
        isActive={isActive}
        role="button"
        aria-current={isActive ? 'page' : undefined}
      >
        {buttonText.toUpperCase()}
      </LinkContent>
    </Element>
  );
};

export { NavButton };
