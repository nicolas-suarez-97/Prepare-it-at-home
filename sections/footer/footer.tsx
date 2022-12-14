import React from "react";
import Link from "next/link";
import styles from "./footer.module.scss";
import Image from "next/image";

const Footer = ({footerOptions}: any) => {
    const ICONS_SIZE = 40;

    return (
        <div className={styles.footer}>
            <ul className={styles.footer__options}>
                {footerOptions.map((i: any) => (
                    <li key={i}><Link href={`/${i}`}>{i}</Link></li>
                ))}
            </ul>
            <ul className={styles.footer__icons}>
                <div className={styles['footer__icons--label']}>
                    <Image
                        src="/img/logored.png"
                        alt="prepare it at home"
                        className={styles['footer__icons--logo']}
                        height={48}
                        width={200}
                    />
                </div>
                <div className={styles['footer__icons--social']}>
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/img/fblogo.png"
                            alt="prepare it at home"
                            height={ICONS_SIZE}
                            width={ICONS_SIZE}
                        />
                    </a>
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/img/instalogo.png"
                            alt="prepare it at home"
                            height={ICONS_SIZE}
                            width={ICONS_SIZE}
                        />
                    </a>
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/img/tiklogo.png"
                            alt="prepare it at home"
                            height={ICONS_SIZE}
                            width={ICONS_SIZE}
                        />
                    </a>


                </div>
            </ul>
            <div className={styles.divider}/>
            <p className={styles.legal}>
                <b>Aviso legal: "</b> Este producto se comercializa con el apoyo de Hotmart. La plataforma no realiza un
                control editorial previo de los productos ofertados, ni eval??a el tecnicismo o la experiencia de
                quienes los elaboran. La existencia de un producto y su adquisici??n, a trav??s de la plataforma, no
                puede considerarse garant??a de calidad de contenido y resultado, en ning??n caso. Al adquirirlo, el
                comprador declara conocer esta informaci??n. Puedes acceder a los t??rminos y pol??ticas de Hotmart <a
                href="https://hotmart.com/es/legal" target="_blank" rel="noreferrer">aqu??</a>,
                incluso antes de finalizar la compra. <b>"</b>
            </p>
        </div>
    );
}

export default Footer;