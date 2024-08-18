import React from 'react';
import styles from './copyText.module.css';
import { GoCopy } from "react-icons/go";

interface CopyTextProps {
    textToCopy?: string;
}

export const CopyText: React.FC<CopyTextProps> = ({ textToCopy = "npm install retroByteUI@latest" }) => {

    const handleCopyClick = async (): Promise<void> => {
        try {
            await navigator.clipboard.writeText(textToCopy);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <div className={styles.container}>
            <p className={styles.text}>{textToCopy}</p>
            <button className={styles.button} onClick={handleCopyClick}><GoCopy /></button>
        </div>
    );
};


