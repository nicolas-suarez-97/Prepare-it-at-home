import React from "react";
import styles from "./gallery.module.scss";

const GallerySection = ({gallery}: any) => {
    const {title, images} = gallery;
    return (
        <section className={styles.gallery}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.gallery__container}>
                {images.map((image: any, index: number)=> (
                    <img key={index} src={image} className={styles.gallery__image} alt="" />
                ))}
            </div>
        </section>
    );
}

export default GallerySection;