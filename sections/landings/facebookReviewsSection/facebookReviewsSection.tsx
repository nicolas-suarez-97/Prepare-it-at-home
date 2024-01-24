import React from "react";
import styles from "./facebookReviews.module.scss";
import {GallerySectionType} from "../../../types/Sections";
import {LandingIds} from "../../../utils/constants";

type Props = {
    facebookReviews: GallerySectionType
}

const FacebookReviewsSection = ({facebookReviews}: Props) => {
    const {title, images} = facebookReviews;
    return (
        <section className={styles.gallery} id={LandingIds.FACEBOOK_REVIEWS_SECTION}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.gallery__container}>
                {images.map((image: string, index: number)=> (
                    <img key={index} src={image} className={styles.gallery__image} alt="" />
                ))}
            </div>
        </section>
    );
}

export default FacebookReviewsSection;