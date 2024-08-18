import { Meta, StoryObj } from '@storybook/react';
import image from '/assets/user.jpg';
import { UserCard } from 'retro-byte-ui';

const meta: Meta<typeof UserCard> = {
    title: 'Cards/User',
    component: UserCard,
    tags: ['autodocs'],
    args: {
        image: "https://picsum.photos/id/237/200/300",
        alt: "user image",
        title: "Gonzalo Mina",
        subtitle: "Frontend Developer",
    },
};

export default meta;

type Story = StoryObj<typeof UserCard>;

export const Primary: Story = {
    args: {
        image: image,
        alt: "user image",
        title: "Gonzalo Mina",
        subtitle: "Frontend Developer",
    },
};
