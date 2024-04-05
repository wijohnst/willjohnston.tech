import * as React from 'react';

import ReactIcon from '@@/public/Icons/react-icon.svg';
import TypeScriptIcon from '@@/public/Icons/typescript-icon.svg';
import { ControlConfigEntry } from './TechStackDisplay';

export type TechStackKeys = 'react' | 'typescript';

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
};
