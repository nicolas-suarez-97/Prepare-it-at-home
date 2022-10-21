import React from "react";
import styles from "./logo.module.scss"

const Logo = () => {
    return (
        <img
            src="/img/cocteleriaDeAutor/logo.png"
            alt="prepare it at home"
            className={styles.logo}
        />
    );
}

export default Logo;