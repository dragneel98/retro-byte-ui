import { useState } from 'react';
import styles from './product.module.css';
import { FaHeart } from "react-icons/fa";
import { FaHeartBroken } from "react-icons/fa";
import { Button } from "retro-byte-ui";

interface Product {
    name: string;
    price: number;
    image: string;
}

interface ProductCardProps {
    product: Product;
    favoriteOnclick: ()=> void;
    cartOnclick: ()=> void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, favoriteOnclick, cartOnclick }) => {
    const [favorite, setFavorite] = useState(false)
    const addFavorite = () =>{
        if(favorite === true) setFavorite(false)
        else setFavorite(true)
        favoriteOnclick()
    } 
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
                    <button className={styles.favorite} onClick={addFavorite}>
                       { favorite ? <FaHeartBroken/> : <FaHeart />} 
                        </button>
                </div>
                <p className={styles.price}>${product.price}</p>
                <div className={styles.buttonContainer}>
                    <Button onClick={cartOnclick}>Add to Cart</Button>
                </div>
            </div>
        </div>
    );
};
