import React from "react";
import styles from "./producer.module.scss";
import {ProducerSectionType} from "../../../types/Sections";

type Props = {
    producer: ProducerSectionType,
}

const ProducerSection = ({producer}: Props) => {
    const {title, description} = producer
    return (
        <section>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.content} dangerouslySetInnerHTML={{__html: description}} />
        </section>
    );
}

export default ProducerSection;