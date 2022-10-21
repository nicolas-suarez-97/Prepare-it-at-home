import React from "react";
import styles from "./producer.module.scss";

const ProducerSection = ({producer}: any) => {
    const {title, description} = producer
    return (
        <section>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.content} dangerouslySetInnerHTML={{__html: description}} />
        </section>
    );
}

export default ProducerSection;