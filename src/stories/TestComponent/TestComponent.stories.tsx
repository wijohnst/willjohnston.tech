// Global Imports
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// Local Imports
import { TestComponent } from './TestComponent'

export default {
  title: 'Design System/Atoms/ TestComponent ',
  component: TestComponent,
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof TestComponent>

const Template: ComponentStory<typeof TestComponent> = (args) => (
  <TestComponent {...args} />
)

export const Default = Template.bind({})
Default.args = {}
