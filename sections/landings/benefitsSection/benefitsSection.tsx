import React from "react";
import styles from "./benefits.module.scss";

const BenefitsSection = ({benefits}: any) => {
    const {title, certificateUrl, warrantyUrl, benefitsList} = benefits;
    return (
        <section>
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
                        {benefitsList.map((benefit: any, index: number) => (
                            <li key={index} className={styles.benefits__item}><span className="material-icons">{benefit.icon}</span>{benefit.label}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

    );
}

export default BenefitsSection;
