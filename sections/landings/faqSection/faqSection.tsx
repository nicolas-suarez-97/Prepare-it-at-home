import React from "react";
import styles from "./faq.module.scss";
import { FaqComponent } from "../../../components";
import {FaqSectionType, FaqItem} from "../../../types/Sections/FaqSectionType";

type Props = {
    faq: FaqSectionType
}

const FaqSection = ({faq}: Props) => {
    const {title, items} = faq;
    return (
        <section>
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