import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react'; 
import { Select } from './select';

// Definir el Meta para la historia
const meta: Meta<typeof Select> = {
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs'],
    args: {
        options: ['Opción 1', 'Opción 2', 'Opción 3'],
        title: "Selecciona una opción"
    }
};
export default meta;

type Story = StoryObj<typeof Select>;

export const EjemploDeSelect: Story = {
    render: (args) => {
        const [selectedValue, setSelectedValue] = useState<string | null>(null);

        const handleSelect = (option: string) => {
            setSelectedValue(option);
        };

        return (
            <div>
                <h1>Selecciona una opción</h1>
                <Select
                    {...args}
                    onSelect={handleSelect}
                >
                </Select>
                {selectedValue && <p>Has seleccionado: {selectedValue}</p>}
            </div>
        );
    }
};
