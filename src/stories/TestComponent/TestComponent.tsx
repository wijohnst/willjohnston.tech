import React from "react";
import styled from "styled-components";

type Props = {};

export const TestComponent = (props: Props) => {
  return <MyDiv>TestComponent</MyDiv>;
};

const MyDiv = styled.div`
  color: red;
`;
