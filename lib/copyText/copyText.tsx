import styles from './copyText.module.css';
import { GoCopy } from "react-icons/go";

interface CopyTextProps {
    textToCopy?: string;
    backgroundColor?: string;
    primaryColor?: string;
}

export const CopyText: React.FC<CopyTextProps> = ({ textToCopy = "npm install retroByteUI@latest", backgroundColor= "#434347", primaryColor= "#EFEFEF"}) => {
    const customStyles = {
        '--primary-color': primaryColor,
        '--secondary-color': backgroundColor,
    } as React.CSSProperties;

    const handleCopyClick = async (): Promise<void> => {
        try {
            await navigator.clipboard.writeText(textToCopy);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <div className={styles.container} style={customStyles}>
            <p className={styles.text}>{textToCopy}</p>
            <button className={styles.button} onClick={handleCopyClick}><GoCopy /></button>
        </div>
    );
};


