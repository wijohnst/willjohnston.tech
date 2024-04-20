import * as React from 'react';
import { ServicesWrapper } from '@/stories/Services/Services.style';
import Offering from '@/stories/Services/Offering/Offering';
import { PageHeadline } from '@/stories/PageHeadline/PageHeadline';

interface Props {}

export enum Offerings {
  APP_DEV = 'App Development',
  STATIC = 'Static Sites',
  UI = 'UI Design',
  GRAPHIC = 'Graphic Design',
  MENTORING = 'Professional Mentoring',
  CONSULTING = 'Consulting',
}

const Services = ({}: Props) => {
  const [activeOffering, setActiveOffering] = React.useState<Offerings | null>(
    null,
  );

  const handleOfferingClick = (offering: Offerings): void => {
    if (activeOffering === offering) {
      setActiveOffering(null);
    } else {
      setActiveOffering(offering);
    }
  };

  return (
    <ServicesWrapper>
      <PageHeadline>
        <h1>Services</h1>
      </PageHeadline>
      <ul>
        <Offering
          isActive={activeOffering === Offerings.APP_DEV}
          heading={Offerings.APP_DEV}
          handleClick={handleOfferingClick}
        >
          <p>App Dev</p>
          <button onClick={() => console.log('CTA CLICK')}>
            <h3>Learn More</h3>
          </button>
        </Offering>
        <Offering
          isActive={activeOffering === Offerings.STATIC}
          heading={Offerings.STATIC}
          handleClick={handleOfferingClick}
        >
          <p>Static Sites</p>
          <button>
            <h3>Learn More</h3>
          </button>
        </Offering>
        <Offering
          isActive={activeOffering === Offerings.UI}
          heading={Offerings.UI}
          handleClick={handleOfferingClick}
        >
          <p>UI Design</p>
          <button>
            <h3>Learn More</h3>
          </button>
        </Offering>
        <Offering
          isActive={activeOffering === Offerings.GRAPHIC}
          heading={Offerings.GRAPHIC}
          handleClick={handleOfferingClick}
        >
          <p>Graphic Design</p>
          <button>
            <h3>Learn More</h3>
          </button>
        </Offering>
        <Offering
          isActive={activeOffering === Offerings.MENTORING}
          heading={Offerings.MENTORING}
          handleClick={handleOfferingClick}
        >
          <p>Professional Mentoring</p>
          <button>
            <h3>Learn More</h3>
          </button>
        </Offering>
        <Offering
          isActive={activeOffering === Offerings.CONSULTING}
          heading={Offerings.CONSULTING}
          handleClick={handleOfferingClick}
        >
          <p>Consulting</p>
          <button>
            <h3>Learn More</h3>
          </button>
        </Offering>
      </ul>
    </ServicesWrapper>
  );
};

export default Services;
