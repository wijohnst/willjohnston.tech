import * as React from 'react';
import styled from 'styled-components';

import { Headlines } from '@/stories/Blog/Headlines/Headlines';
import { BlogList } from './BlogList/BlogList';

interface Props {}

const Blog = ({}: Props) => {
  return (
    <SemanticElement>
      <BlogList />
      <Headlines />
    </SemanticElement>
  );
};

const SemanticElement = styled.section`
  display: flex;
  justify-content: center;
`;

export default Blog;
