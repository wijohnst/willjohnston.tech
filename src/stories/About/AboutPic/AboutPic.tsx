import * as React from 'react';

import { SemanticElement } from '@/stories/About/AboutPic/AboutPic.style';
import Image from 'next/image';
import useGetMediaQuery from '@/hooks/useGetMediaQuery';

type AboutPicProps = {
  height?: number;
  width?: number;
};

const AboutPic = ({ height = 183, width = 183 }: AboutPicProps) => {
  return (
    <SemanticElement>
      <Image
        src={`/About/will_about_pic_${height.toString()}_${width.toString()}.png`}
        height={height}
        width={width}
        alt="Will Johnston in newsprint style"
      />
    </SemanticElement>
  );
};

export { AboutPic };
