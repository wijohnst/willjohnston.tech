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
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Blog;
