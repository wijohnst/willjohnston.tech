import * as React from 'react';

import ReactIcon from '@@/public/Icons/react-icon.svg';
import TypeScriptIcon from '@@/public/Icons/typescript-icon.svg';
import NodeIcon from '@@/public/Icons/node-icon.svg';
import ExpressIcon from '@@/public/Icons/express-icon.svg';
import MongoIcon from '@@/public/Icons/mongo-icon.svg';

import { ControlConfigEntry, ManifestData } from './TechStackDisplay';

export type TechStackKeys =
  | 'react'
  | 'typescript'
  | 'node'
  | 'express'
  | 'mongo';

export const TechStack: Record<TechStackKeys, ControlConfigEntry> = {
  react: {
    label: 'React',
    icon: <ReactIcon />,
    packageName: 'react',
  },
  typescript: {
    label: 'TypeScript',
    icon: <TypeScriptIcon />,
    packageName: 'typescript',
  },
  node: {
    label: 'Node',
    icon: <NodeIcon />,
    packageName: 'node',
  },
  express: {
    label: 'Express',
    icon: <ExpressIcon />,
    packageName: 'express',
  },
  mongo: { label: 'MongoDB', icon: <MongoIcon />, packageName: 'mongo' },
};

export type TechStackOverrideKeys = 'node' | 'mongo';

export type TechStackOverrideData = Record<TechStackOverrideKeys, ManifestData>;

export const techStackOverrideData: TechStackOverrideData = {
  node: {
    description:
      'A cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts',
    homepage: 'https://nodejs.org/en',
    name: 'node',
  },
  mongo: {
    description:
      'Document database that provides high performance, high availability, and easy scalability',
    homepage: 'https://www.mongodb.com',
    name: 'mongo',
  },
};
