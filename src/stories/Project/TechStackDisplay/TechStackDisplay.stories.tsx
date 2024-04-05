import * as Rect from 'react';

import ReactIcon from '@@/public/Icons/react-icon.svg';
import NodeIcon from '@@/public/Icons/node-icon.svg';

import { StoryFn, Meta } from '@storybook/react';

import TechStackDisplay from '@/stories/Project/TechStackDisplay/TechStackDisplay';

export default {
  title: 'Project/TechStackDisplay',
  component: TechStackDisplay,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof TechStackDisplay>;

const Template: StoryFn<typeof TechStackDisplay> = (args) => (
  <TechStackDisplay {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const WithConfig = Template.bind({});
WithConfig.args = {
  ...Default.args,
  controlConfig: [
    {
      label: 'React',
      icon: <ReactIcon />,
      content: (
        <p>
          React is a JavaScript library for building user interfaces, developed
          by Facebook. It facilitates the creation of reusable UI components
          that efficiently update and render in response to data changes. React
          employs a declarative approach, enabling developers to describe how
          the UI should look at any given point, abstracting away the manual
          manipulation of the DOM. Its virtual DOM system optimizes performance
          by minimizing direct DOM manipulation. React's component-based
          architecture promotes modular development, simplifies code
          maintenance, and supports seamless integration with other libraries
          and frameworks. With its strong community support and ecosystem, React
          remains a popular choice for building interactive and scalable web
          applications.
        </p>
      ),
    },
    {
      label: 'Node',
      icon: <NodeIcon />,
      content: (
        <p>
          Node.js is a JavaScript runtime environment built on Chrome's V8
          JavaScript engine, enabling developers to run JavaScript code outside
          the browser. It provides an event-driven, non-blocking I/O model that
          makes it lightweight and efficient for building scalable network
          applications. Node.js' package ecosystem, npm, is one of the largest
          open-source libraries in the world, offering a plethora of reusable
          modules and tools to streamline development. With its single-threaded
          event loop architecture, Node.js can handle numerous concurrent
          connections, making it ideal for building real-time web applications,
          APIs, and server-side applications. Its versatility, performance, and
          extensive community support have made Node.js a go-to choice for
          modern web development.
        </p>
      ),
    },
  ],
};
