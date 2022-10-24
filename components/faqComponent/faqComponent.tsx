import React, {useState} from "react";
import styles from "./faqComponent.module.scss";
import {FaqItem} from "../../types/Sections/FaqSectionType";

type Props = {
    item: FaqItem
}

const FaqComponent = ({item}: Props) => {
    const [expand, setExpand] = useState(false);

    const toggleExpand = () => {
        expand ?
            setExpand(false) :
            setExpand(true)
    }

    return (
        <div className={styles.faq}>
        <div className={styles.container}>
        <div className={styles.faq__content} onClick={toggleExpand}>
        <h4>{item.question}</h4>
        <span className={`material-icons ${expand ? styles.rotateOn : styles.rotateOff}`}>expand_more</span>
    </div>
    <p className={`${styles.faq__answer} ${expand ? styles.expand : styles.less}`} dangerouslySetInnerHTML={{__html: item.answer}} />
    </div>
    </div>
);
}

export default FaqComponent;