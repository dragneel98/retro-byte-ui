import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const  Default: Story = {
  args: {
    children: "click me",
    type: "primary",
    onClick: ()=> {console.log("click");}
  },
};