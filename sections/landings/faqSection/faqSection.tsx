import React from "react";
import styles from "./faq.module.scss";
import { FaqComponent } from "../../../components";
import {FaqSectionType, FaqItem} from "../../../types/Sections/FaqSectionType";
import {LandingIds} from "../../../utils/constants";

type Props = {
    faq: FaqSectionType
}

const FaqSection = ({faq}: Props) => {
    const {title, items} = faq;
    return (
        <section id={LandingIds.FAQ_SECTION}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.faq}>
                {items.map((item: FaqItem, index: number) => (
                    <FaqComponent key={index} item={item} />
                ))}
            </div>
        </section>
    );
}

export default FaqSection;