import * as React from 'react';
import styled from 'styled-components';

import { Headlines } from '@/stories/Blog/Headlines/Headlines';
import { BlogList } from './BlogList/BlogList';
import { HamburgerMenu } from '@/stories/HamburgerMenu/HamburgerMenu';
import { Breakpoints, ColorValuesLightTheme } from '@/types/app.types';
import { useMediaQuery } from '@/hooks';

interface Props {}

const Blog = ({}: Props) => {
  const isDesktop = useMediaQuery(Breakpoints.desktop);

  return (
    <SemanticElement>
      {isDesktop && <BlogList />}
      <div className="hamburger-menu-wrapper">
        <HamburgerMenu>
          <BlogList />
        </HamburgerMenu>
      </div>
      <Headlines />
    </SemanticElement>
  );
};

const SemanticElement = styled.section`
  display: flex;
  justify-content: center;

  .hamburger-menu-wrapper {
    display: none;
    width: 50px;
    position: absolute;
    z-index: 99;

    :has(ul) {
      padding: 0.25rem;
    }

    /* background-color: ${ColorValuesLightTheme['color-most-prominent']}; */

    @media ${Breakpoints.laptop},
      ${Breakpoints.laptop_small},
      ${Breakpoints.tablet},
      ${Breakpoints.tablet_small} {
      top: 10%;
      left: 1%;
      display: block;
    }

    @media ${Breakpoints.mobile}, ${Breakpoints.mobile_small} {
      top: 6%;
      left: 1%;
      display: block;
    }
  }

  .hamburger-menu-wrapper::before {
  }
`;

export default Blog;
