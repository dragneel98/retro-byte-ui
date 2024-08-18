import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './dropDown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  args: {
    options:  ['array'] , 
    placeholder: 'text' , 
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    placeholder: 'Choose an option',
    onSelect: (option) => console.log('Selected:', option),
  },
};
