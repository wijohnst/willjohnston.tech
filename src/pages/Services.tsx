import * as React from 'react';
import { ServicesWrapper } from '@/stories/Services/Services.style';
import Offering from '@/stories/Services/Offering/Offering';
import { PageHeadline } from '@/stories/PageHeadline/PageHeadline';
import {
  AppDev,
  StaticSites,
} from '@/stories/Services/Offering/OfferingContent';
import { Design } from '@/stories/Services/Offering/OfferingContent/Design';
import { Graphic } from '@/stories/Services/Offering/OfferingContent/Graphic';
import { Mentoring } from '@/stories/Services/Offering/OfferingContent/Mentoring';
import { Consulting } from '@/stories/Services/Offering/OfferingContent/Consulting';

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
          <AppDev isActive={activeOffering === Offerings.APP_DEV} />
        </Offering>
        <Offering
          isActive={activeOffering === Offerings.STATIC}
          heading={Offerings.STATIC}
          handleClick={handleOfferingClick}
        >
          <StaticSites isActive={activeOffering === Offerings.STATIC} />
        </Offering>
        <Offering
          isActive={activeOffering === Offerings.UI}
          heading={Offerings.UI}
          handleClick={handleOfferingClick}
        >
          <Design isActive={activeOffering === Offerings.UI} />
        </Offering>
        <Offering
          isActive={activeOffering === Offerings.GRAPHIC}
          heading={Offerings.GRAPHIC}
          handleClick={handleOfferingClick}
        >
          <Graphic isActive={activeOffering === Offerings.GRAPHIC} />
        </Offering>
        <Offering
          isActive={activeOffering === Offerings.MENTORING}
          heading={Offerings.MENTORING}
          handleClick={handleOfferingClick}
        >
          <Mentoring isActive={activeOffering === Offerings.MENTORING} />
        </Offering>
        <Offering
          isActive={activeOffering === Offerings.CONSULTING}
          heading={Offerings.CONSULTING}
          handleClick={handleOfferingClick}
        >
          <Consulting isActive={activeOffering === Offerings.CONSULTING} />
        </Offering>
      </ul>
    </ServicesWrapper>
  );
};

export default Services;
