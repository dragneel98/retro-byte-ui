import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    currentPage: {
      control: { type: 'number' },
      defaultValue: 1,
    },
    totalPages: {
      control: { type: 'number' },
      defaultValue: 10,
    },
    onPageChange: { action: 'pageChanged' },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);

    const handlePageChange = (selectedItem: { selected: number }) => {
      setCurrentPage(selectedItem.selected + 1);
      args.onPageChange(selectedItem);
    };

    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    );
  },
};
