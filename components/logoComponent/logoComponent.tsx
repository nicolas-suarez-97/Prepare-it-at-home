import React from "react";
import styles from "./logo.module.scss"
import Link from "next/link";

const Logo = () => {
    return (
        <a className={styles.logo}>
            <h1>Preparalo en Casa</h1>
        </a>
    );
}

export default Logo;