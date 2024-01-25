import React, {useEffect, useState} from "react";
import styles from "./topCTA.module.scss";
import Countdown from 'react-countdown';

const TopCTASection = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [hideSection, setHideSection] = useState(false);
    const [preserveCTA, setPreserveCTA] = useState(false);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    const getTimeUntilEndOfDay = () => {
        const d = new Date();
        const h = d.getHours();
        const m = d.getMinutes();
        const s = d.getSeconds();
        return ((24 * 60 * 60) - (h * 60 * 60) - (m * 60) - s) * 1000;
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const showSection = () => {
        if (hideSection || scrollPosition < 100) return true;
        if (!preserveCTA) {
            if (scrollPosition < 2500
                || scrollPosition >= document.documentElement.offsetHeight - 1000) {
                return true;
            } else {
                setPreserveCTA(true);
            }
        }
        return false
    }

    return (
        <section className={`${styles.pricing} ${showSection() ? styles.hide : ''}`}>
            <h2>ULTIMOS CUPOS!!!</h2>
            <h6>Aprovecha esta promoción</h6>

            <div className={styles.pricing__close} onClick={() => setHideSection(true)}><i className="material-icons">close</i></div>
        </section>
    );
}

export default TopCTASection;