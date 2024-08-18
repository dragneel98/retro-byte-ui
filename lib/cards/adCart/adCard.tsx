import { Button } from 'retro-byte-ui';
import styles from './adCard.module.css';
// import imgAd from "/assets/addImage.jpg";
// import adIcon from "/assets/adIcon.jpg"

interface AdCardProps {
    image: string;
    adIcon: string;
    title: string;
    description: string;
    buttonText: string;
}

export const AdCard: React.FC<AdCardProps> = ({ image, title, description, buttonText, adIcon }) => {
    return (
        <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
            <div className={styles.overlay}>
                <img className={styles.image} src={adIcon} alt="Ad Icon" />
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.description}>{description}</p>
                </div>
                <Button type='tertiary'>{buttonText}</Button>
            </div>
        </div>
    );
};


