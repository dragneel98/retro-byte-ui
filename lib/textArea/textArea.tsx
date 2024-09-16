import React from 'react';
import styles from "./textArea.module.css";

interface TextAreaProps {
    placeholder?: string; 
    primaryColor?: string;
    secondaryColor?: string;
    maxHeight?:string;
}

export const TextArea: React.FC<TextAreaProps> = ({ placeholder, primaryColor, secondaryColor, maxHeight }) => {
    const customStyles = {
        '--primary-color': primaryColor,
        '--secondary-color': secondaryColor,
        "--max-height": maxHeight,
    } as React.CSSProperties;

    return (
        <div style={customStyles} className={styles.textareaContainer}>
      <textarea className={styles.textarea} placeholder=" "  rows={4}/>
      <label className={styles.label}>{placeholder}</label>
    </div>
        // <div>
        //     <textarea
        //         name='content'
        //         rows={4}
        //         className={style.textarea}
        //         placeholder={placeholder}
        //     ></textarea>
        // </div>

    );
};

