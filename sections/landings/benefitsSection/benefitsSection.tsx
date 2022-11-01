import React from "react";
import styles from "./benefits.module.scss";
import {BenefitsSectionType, BenefitItem} from "../../../types/Sections/BenefitsSectionType";
import {LandingIds} from "../../../utils/constants";

type Props = {
    benefits: BenefitsSectionType
}

const BenefitsSection = ({benefits}: Props) => {
    const {title, certificateUrl, warrantyUrl, benefitsList} = benefits;
    return (
        <section id={LandingIds.BENEFITS_SECTION}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.benefits}>
                <div className={styles.benefits__imagesContainer}>
                    <div className={styles.benefits__images}>
                        <img src={certificateUrl} alt="" className={styles.topImage}/>
                        <img src={warrantyUrl} alt="" className={styles.bottomImage}/>
                    </div>
                </div>
                <div className={styles.benefits__content}>
                    <ul className={styles.benefits__list}>
                        {benefitsList.map((benefit: BenefitItem, index: number) => (
                            <li key={index} className={styles.benefits__item}><span className="material-icons">{benefit.icon}</span>{benefit.label}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

    );
}

export default BenefitsSection;
