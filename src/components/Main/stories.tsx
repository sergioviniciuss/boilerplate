import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Advanced React',
    description: 'Typescript, ReactJS, NextJS and Styled Components'
  }
} as Meta

export const Default: Story = (args) => <Main {...args} />

export const Primary: Story = (args) => <Main {...args} />
Primary.args = {
  title: 'title primary',
  description: 'description primary'
}

export const Secondary: Story = (args) => <Main {...args} />
Secondary.args = {
  title: 'title secondary',
  description: 'description secondary'
}
