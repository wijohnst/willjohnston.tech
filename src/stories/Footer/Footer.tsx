import * as React from 'react';
import { AppIcon } from '../AppIcon/AppIcon';

import {
  SemanticElement,
  FooterInfoBox,
  FooterNav,
  FooterNavItem,
} from '@/stories/Footer/Footer.style';

import CodeIcon from '@@/public/Icons/code-icon.svg';
import { NavButton } from '../NavButton/NavButton';

const Footer = (): React.ReactElement => {
  return (
    <SemanticElement>
      <FooterInfoBox>
        <div className="icon-wrapper">
          <AppIcon>
            <CodeIcon />
          </AppIcon>
        </div>
        <span className="info-box-text">
          {`WillJohnston.tech - ${new Date().getFullYear()} Will Johnston`}
        </span>
      </FooterInfoBox>
      <FooterNav>
        <FooterNavItem>
          <h6>CATEGORIES</h6>
          <NavButton pathname="About" buttonText="about" isActive={false} />
          <NavButton
            pathname="Portfolio"
            buttonText="portfolio"
            isActive={false}
          />
          <NavButton
            pathname="Services"
            buttonText="services"
            isActive={false}
          />
          <NavButton pathname="Blog" buttonText="blog " isActive={false} />
        </FooterNavItem>
        <FooterNavItem>
          <h6>SERVICES</h6>
        </FooterNavItem>
        <FooterNavItem>
          <h6>FOLLOW</h6>
        </FooterNavItem>
      </FooterNav>
    </SemanticElement>
  );
};

export { Footer };
