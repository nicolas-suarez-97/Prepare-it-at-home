import React from "react";
import styles from "./getStarted.module.scss";
import { ActionButton } from "../../../components";
import {GetStartedSectionType} from "../../../types/Sections";
import {LinkDataType} from "../../../types";
import {LandingIds} from "../../../utils/constants";

type Props = {
    getStarted: GetStartedSectionType,
    linkData: LinkDataType,
}

const GetStartedSection = ({getStarted, linkData}: Props) => {
    const {title, subtitle, imageUrl, buttonLabel} = getStarted;
    linkData = {
        ...linkData,
        buttonStyle: styles.getStarted__button,
        label: buttonLabel
    }

    return (
        <section className={styles.getStarted} id={LandingIds.GET_STARTED_SECTION}>
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