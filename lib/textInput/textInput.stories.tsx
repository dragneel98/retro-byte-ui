import { Meta, StoryObj } from '@storybook/react';
import { TextInput } from "./textInput";

const meta: Meta<typeof TextInput> = {
    title: 'Components/TextInput',
    component: TextInput,
    tags: ['autodocs'],
    args: {
        label: "text input"
    }
};
export default meta;

type Story = StoryObj<typeof TextInput>;

export const Primary: Story = {
    args: {
        label: "text input",
        secondaryColor:"#ffffff"
    }
};
