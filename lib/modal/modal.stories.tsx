import { Meta, StoryObj } from '@storybook/react';
import { Modal } from './modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    modalContent: 'This is the modal content',
    buttonChildren: 'Open Modal',
    closeButtonChildren: 'Close Modal',
    // onclick: () => alert('Modal opened'),
  },
};
