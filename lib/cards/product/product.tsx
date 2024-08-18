import styles from './product.module.css';
import { FaHeart } from "react-icons/fa";
import { Button } from "retro-byte-ui";

interface Product {
    name: string;
    price: number;
    image: string;
}

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className={styles.card}>
            <img
                src={product.image}
                alt={product.name}
                className={styles.image}
            />
            <div className={styles.details}>
                <div className={styles.header}>
                    <h2 className={styles.name}>{product.name}</h2>
                    <button className={styles.favorite}><FaHeart /></button>
                </div>
                <p className={styles.price}>${product.price}</p>
                <div className={styles.buttonContainer}>
                    <Button>Add to Cart</Button>
                </div>
            </div>
        </div>
    );
};
