import React from "react";
import styles from "./getStarted.module.scss";
import { ActionButton } from "../../../components";

const GetStartedSection = ({getStarted, linkData}: any) => {
    const {title, subtitle, imageUrl, buttonLabel} = getStarted;
    const {url, discount, setIsModalOpen} = linkData
    linkData = {
        ...linkData,
        buttonStyle: styles.getStarted__button,
        label: buttonLabel
    }

    return (
        <section className={styles.getStarted}>
            <div className={styles.getStarted__container}>
                <div className={styles.getStarted__content}>
                    <h1 className={styles.getStarted__title}>{title}</h1>
                    <h4 className={styles.getStarted__subtitle}>{subtitle}</h4>
                    <ActionButton
                        linkData={linkData}
                    />
                </div>
                <div>
                    <img src={imageUrl} alt="" className={styles.getStarted__image}/>
                </div>
            </div>
        </section>
    );
}

export default GetStartedSection;