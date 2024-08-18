import type { Meta, StoryObj } from '@storybook/react';
import { CopyText } from './copyText';

const meta: Meta<typeof CopyText> = {
  title: 'Components/CopyText',
  component: CopyText,
  tags: ['autodocs'],
  argTypes: {
    textToCopy: { control: 'text' }, // Permite controlar el texto en Storybook
  },
};

export default meta;
type Story = StoryObj<typeof CopyText>;

export const Default: Story = {
  args: {
    textToCopy: "npm install retroByteUI@latest", // Valor por defecto para la historia
  },
};

