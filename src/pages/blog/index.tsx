import * as React from 'react';
import styled from 'styled-components';

import { Headlines } from '@/stories/Blog/Headlines/Headlines';

interface Props {}

const Blog = ({}: Props) => {
  return (
    <SemanticElement>
      <Headlines />
    </SemanticElement>
  );
};

const SemanticElement = styled.section`
  background-color: lightpink;
  display: flex;
  justify-content: center;
  max-height: 30rem;
`;

export default Blog;
