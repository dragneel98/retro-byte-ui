import { Accordion, AdCard, Button, ProductCard, TextInput, UserCard } from 'retro-byte-ui';
import style from './bentoGrid.module.css';
import icon from "../../../assets/RetroByteUI-Photoroom.png"
// import imageProduct from "/src/app/assets/product.jpg"
// import icon from "/src/app/assets/RetroByteUI-Photoroom.png";
// import img from "/src/app/assets/user.jpg";
// import imgAd from "/public/addImage.jpg"
// import iconAd from "/src/app/assets/adIcon.jpg"
// import imgAd from '/assets/addImage.jpg';  
// import adIcon from ''; 
export const BentoGrid = () => {

    // const product = {
    //     name: 'Sample Product',
    //     price: 99.99,
    //     image: imageProduct
    // };

    return (
        <div className={style.bentoContainer}>
            <div className={`${style.bentoItem} ${style.item1}`}>
                <Button>Button</Button>
            </div>
            <div className={`${style.bentoItem} ${style.item2}`}>
                <div className={style.userContainer}>
                    {/* <UserCard image={img} alt="user image" title="gonzalo mina" subtitle="frontend dev"></UserCard> */}
                </div>
            </div>
            <div className={`${style.bentoItem} ${style.item3}`}>
                <div className={style.adCartContainer}>
                    {/* <AdCard image={imgAd} title={"app"} description={"a fantastic app"}/> */}
                </div>
            </div>
            <div className={`${style.bentoItem} ${style.item4}`}>
                <div className={style.productContainer}>
                    {/* <ProductCard product={product}></ProductCard> */}
                </div>
            </div>
            <div className={`${style.bentoItem} ${style.logo}`}>
                {/* <Image alt="icon" src={icon} height={200} width={200}></Image> */}
                {/* <img src={icon}/> */}
            </div>
            <div className={`${style.bentoItem} ${style.item5}`}>
                <div className={style.accordionContainer}>
                    <Accordion title="acordion" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></Accordion>
                </div>
            </div>
            <div className={`${style.bentoItem} ${style.item6}`}>
                <TextInput label="text input"></TextInput>
            </div>
        </div>
    );
};