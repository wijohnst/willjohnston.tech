/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';

import useGetMediaQuery from '@/hooks/useGetMediaQuery';

import { AboutPic } from '@/stories/About/AboutPic/AboutPic';
import { getAboutPicDimensionsFromBreakpoint } from '@/stories/About/About.utils';

import { SemanticElement } from '@/stories/About/About.style';
import { PageHeadline } from '@/stories/PageHeadline/PageHeadline';

interface Props {}

const About = ({}: Props) => {
  const breakpoint = useGetMediaQuery();

  const { height, width } = getAboutPicDimensionsFromBreakpoint(breakpoint);

  return (
    <SemanticElement>
      <PageHeadline>
        <h1>About</h1>
      </PageHeadline>
      <div className="content-wrapper">
        <div className="about-pic-wrapper">
          <AboutPic height={height} width={width} />
        </div>
        <div className="about-text-wrapper">
          <p>
            Hello, I'm Will, a passionate software engineer with a diverse work
            history that has shaped me into an effective leader in the world of
            technology. My journey in the tech industry has been an exciting
            one, and I'm thrilled to share my experiences with you.
          </p>

          <p>
            My primary focus is on full-stack web development, and I derive
            immense joy from creating robust and engaging applications. On the
            front-end, I specialize in crafting interactive user interfaces
            using the power of React. Its versatility and performance have
            allowed me to build captivating user experiences that leave a
            lasting impression.
          </p>

          <p>
            When it comes to backend development, my weapon of choice is
            Node.js, and I complement it with TypeScript to write clean and
            maintainable code. The combination of Node and TypeScript empowers
            me to build scalable and efficient backend applications that can
            handle the demands of modern web projects.
          </p>

          <p>
            Beyond coding, my life revolves around my wonderful family. I'm
            fortunate to share my journey with my wife, who is a dedicated nurse
            practitioner, and our adorable son, Guy. They bring balance to my
            life and serve as a constant source of inspiration and support.
          </p>

          <p>
            Whether I'm solving complex technical challenges or spending quality
            time with my loved ones, I approach life with curiosity and
            dedication. I'm always excited to collaborate with like-minded
            individuals and contribute to projects that make a positive impact
            on the world. Thank you for visiting my website, and I look forward
            to connecting with you!
          </p>
        </div>
      </div>
    </SemanticElement>
  );
};

export default About;
