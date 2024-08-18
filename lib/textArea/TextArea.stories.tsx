import { TextArea } from "retro-byte-ui";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextArea> = {
    title: 'Components/TextArea',
    component: TextArea,
    tags: ['autodocs'],
    args: {
        placeholder: "¡¿Qué está pasando!?",
    },
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Primary: Story = {
    args: {
        placeholder: "¡¿Qué está pasando!?",
    },
};

export const EjemploDeTextArea: React.FC = () => {
    return (
        <div style={{ width: "150px" }}>
            <TextArea placeholder="hola" />
        </div>
    );
};
