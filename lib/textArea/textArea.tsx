import React from 'react';
import style from "./textArea.module.css";

interface TextAreaProps {
    placeholder?: string; // Placeholder es opcional
}

export const TextArea: React.FC<TextAreaProps> = ({ placeholder }) => {
    return (
        <textarea
            name='content'
            rows={4}
            className={style.textarea}
            placeholder={placeholder}
        ></textarea>
    );
};

