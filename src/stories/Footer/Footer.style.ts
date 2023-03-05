import styled from 'styled-components';

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 2fr;
  min-height: 150px;

  border-top: solid thin;
  border-color: var(--wjt-color-stroke-least-prominent);
  padding-top: 0.5em;
`;

export const FooterInfoBox = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  .icon-wrapper {
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .info-box-text {
    margin-top: 0.5rem;
    font-weight: 400;
    text-align: center;
    font-size: 0.75rem;
  }
`;

export const FooterNav = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const FooterNavItem = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  h6 {
    color: var(--wjt-color-accent);
  }

  a {
    margin-top: 0.5rem;
  }
`;
