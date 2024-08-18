import styles from './user.module.css';

interface UserProps {
    image: string;
    alt: string;
    title: string;
    subtitle?: string;
}

export const UserCard: React.FC<UserProps> =({ image, alt, title, subtitle }) =>{
    return (
        <div className={styles.imgContainer}>
            <img className={styles.image} src={image} alt={alt} width={60} height={60} />
            <div className={styles.textContainer}>
                <h3 className={styles.h3}>{title}</h3>
                <p className={styles.p}>{subtitle}</p>
            </div>
        </div>
    );
}
