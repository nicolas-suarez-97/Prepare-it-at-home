import React from "react";
import styles from "./gallery.module.scss";
import {GallerySectionType} from "../../../types/Sections";
import {LandingIds} from "../../../utils/constants";

type Props = {
    gallery: GallerySectionType
}

const GallerySection = ({gallery}: Props) => {
    const {title, images} = gallery;
    return (
        <section className={styles.gallery} id={LandingIds.GALLERY_SECTION}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.gallery__container}>
                {images.map((image: string, index: number)=> (
                    <img key={index} src={image} className={styles.gallery__image} alt="" />
                ))}
            </div>
        </section>
    );
}

export default GallerySection;