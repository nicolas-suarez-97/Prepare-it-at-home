import React from "react";
import styles from "./hook.module.scss";
import { ActionButton } from "../../../components";

const HookSection = ({hook, linkData}: any) => {
    const {title, content, buttonLabel} = hook;
    const {url, discount, setIsModalOpen} = linkData
    linkData = {
        ...linkData,
        buttonStyle: styles.hook__actionButton,
        label: buttonLabel
    }

    return (
        <section className={styles.hook}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.hook__content} dangerouslySetInnerHTML={{__html: content}} />
            <ActionButton
                linkData={linkData}
            />
        </section>
    );
}

export default HookSection;