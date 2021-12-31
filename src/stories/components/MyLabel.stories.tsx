import { MyLabel, MyLabelProps } from '../../components/MyLabel';
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  argTypes: {
    size: { control: 'select' },
    color: { control: 'select' },
    fontColor: { control: 'color' },
  }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args: MyLabelProps) => <MyLabel {...args} />

// Basic
export const Basic = Template.bind({})
Basic.args = {
  size: 'normal',
  allCaps: false // Capizalaze all words
}

// All Caps
export const AllCaps = Template.bind({})
AllCaps.args = {
  size: 'normal',
  allCaps: true
}

// Secondary
export const Secondary = Template.bind({})
Secondary.args = {
  size: 'normal',
  color: 'secondary'
}

// Tertiary
export const Tertiary = Template.bind({})
Tertiary.args = {
  size: 'normal',
  color: 'tertiary'
}

// Custom Font Color
export const CustomFontColor = Template.bind({})
CustomFontColor.args = {
  size: 'h1',
  fontColor: 'red'
}