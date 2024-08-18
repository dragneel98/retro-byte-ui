import { useState } from 'react';
import styles from "./textinput.module.css";
import { UseFormRegisterReturn } from 'react-hook-form';

interface TextInputProps {
    label: string;
    primaryColor?: string;
    secondaryColor?: string;
    register: UseFormRegisterReturn; // Usar la interfaz del formulario para tipar register
}

export const TextInput: React.FC<TextInputProps> = ({ label, primaryColor, secondaryColor, register}) => {
    const customStyles = {
        '--primary-color': primaryColor,
        '--secondary-color': secondaryColor,
    } as React.CSSProperties;

    const [isFilled, setIsFilled] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsFilled(event.target.value !== '');
    };

    return (
        <div className={styles.container} style={customStyles}>
            <div className={styles.entryArea}>
                <input
                    className={styles.input}
                    type="text"
                    {...register}
                    onChange={handleInputChange}
                />
                <label className={`${styles.label} ${isFilled ? styles.filled : ''}`}> {label} </label>
                <div className={styles.logoContainer}></div>
            </div>
        </div>
    );
};
