import React from "react";
import styles from "./imageReviews.module.scss"
import {GallerySectionType} from "../../../types/Sections";
import {LandingIds} from "../../../utils/constants";

type Props = {
    imageReviews: GallerySectionType
}

const ImageReviewsSection = ({imageReviews}: Props) => {
    const {title, images} = imageReviews;
    return (
        <section className={styles.gallery} id={LandingIds.IMAGE_REVIEWS_SECTION}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.gallery__container}>
                {images.map((image: string, index: number)=> (
                    <img key={index} src={image} className={styles.gallery__image} alt="" />
                ))}
            </div>
        </section>
    );
}

export default ImageReviewsSection;