import React, {useEffect, useState} from "react";
import styles from "./pricing.module.scss";
import { ActionButton } from "../../../components";

const PricingSection = ({pricing, linkData, value}: any) => {
    const {label} = pricing;
    const [scrollPosition, setScrollPosition] = useState(0);
    const [hideSection, setHideSection] = useState(false);
    const {url, discount, setIsModalOpen} = linkData
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    linkData = {
        ...linkData,
        buttonStyle: styles.pricing__button,
        label: "Comprar",
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const showSection = () => {
        if (scrollPosition < 600
            || hideSection
            || scrollPosition >= document.documentElement.offsetHeight - 1000) {
            return true
        }
        return false
    }

    return (
        <section className={`${styles.pricing} ${showSection() ? styles.hide : ''}`}>
            <h2 className={styles.pricing__text}>{label} <span>${value} USD</span></h2>
            <ActionButton
                linkData={linkData}
            />
            <div className={styles.pricing__close} onClick={() => setHideSection(true)}><i className="material-icons">close</i></div>
        </section>
    );
}

export default PricingSection;