import * as React from 'react';
import styled from 'styled-components';

import { Headlines } from '@/stories/Blog/Headlines/Headlines';
import { BlogList } from './BlogList/BlogList';
import { HamburgerMenu } from '@/stories/HamburgerMenu/HamburgerMenu';
import { Breakpoints, ColorValuesLightTheme } from '@/types/app.types';

interface Props {}

const Blog = ({}: Props) => {
  return (
    <SemanticElement>
      <div className="nav-wrapper">
        <div className="bloglist-wrapper">
          <BlogList />
        </div>
        <div className="hamburger-menu-wrapper">
          <HamburgerMenu>
            <BlogList />
          </HamburgerMenu>
        </div>
      </div>
      <Headlines />
    </SemanticElement>
  );
};

const SemanticElement = styled.section`
  display: flex;
  justify-content: center;

  .nav-wrapper {
    background-color: red;
  }

  .bloglist-wrapper {
    @media ${Breakpoints.mobile}, ${Breakpoints.mobile_small} {
      display: none;
    }
  }

  .hamburger-menu-wrapper {
    display: none;
    min-width: 50px;
    position: absolute;
    top: 6%;
    left: 1%;

    :has(ul) {
      padding: 0.25rem;
    }

    background-color: ${ColorValuesLightTheme['color-most-prominent']};

    @media ${Breakpoints.mobile}, ${Breakpoints.mobile_small} {
      display: block;
    }
  }
`;

export default Blog;
