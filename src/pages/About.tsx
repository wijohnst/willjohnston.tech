import * as React from 'react';

import useGetMediaQuery from '@/hooks/useGetMediaQuery/useGetMediaQuery';

import { AboutPic } from '@/stories/About/AboutPic/AboutPic';
import { getAboutPicDimensionsFromBreakpoint } from '@/stories/About/About.utils';

interface Props {}

const About = ({}: Props) => {
  const breakpoint = useGetMediaQuery();

  const { height, width } = getAboutPicDimensionsFromBreakpoint(breakpoint);

  return <AboutPic height={height} width={width} />;
};

export default About;
