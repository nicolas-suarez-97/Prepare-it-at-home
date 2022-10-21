import React from "react";
import styles from "./faq.module.scss";
import { FaqComponent } from "../../../components";

const FaqSection = ({faq}: any) => {
    const {title, items} = faq;
    return (
        <section>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.faq}>
                {items.map((item: any, index: number) => (
                    <FaqComponent key={index} item={item} />
                ))}
            </div>
        </section>
    );
}

export default FaqSection;