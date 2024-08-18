import { ProductCard } from "./product";
import imageProduct from "/assets/product.jpg"

export default {
    title: 'Cards/productCard',
    component: ProductCard,
    tags: ['autodocs'],
    args: {
        product: {
            name: 'Sample Product',
            price: 99.99,
            // image: 'https://via.placeholder.com/300x200'
            image: 'https://via.placeholder.com/300x200'
        }
    }
};

// export const Primary = {
//     args: {
//         label: "text input"
//     }
// }

export const ProductExample = () => {
    const product = {
        name: 'Sample Product',
        price: 99.99,
        image: imageProduct
    };

    return (
        <div style={{ width: 200 }}>
            <h1>Product</h1>
            <ProductCard product={product} />
        </div>
    );
};