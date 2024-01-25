import React from "react";
import styles from "./producer.module.scss";
import {ProducerSectionType} from "../../../types/Sections";
import {LandingIds} from "../../../utils/constants";

type Props = {
    producer: ProducerSectionType,
}

const ProducerSection = ({producer}: Props) => {
    const {title, description} = producer
    return (
        <section id={LandingIds.PRODUCER_SECTION} className={styles.producer}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.content} dangerouslySetInnerHTML={{__html: description}} />
        </section>
    );
}

export default ProducerSection;