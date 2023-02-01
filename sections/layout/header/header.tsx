import React from "react";
import Link from "next/link";
import styles from './header.module.scss';
import {PageType} from "../../../utils/constants";
import { LogoComponent } from "../../../components";

const Header = ({title, options, placeholder, pageType}: any) => {

    return (
        <>
            <div className={styles.container}>
                <LogoComponent/>
                <ul className={styles.container__options}>
                    {options.map((o: any) => (
                        <li key={o.path}><Link href={o.path}>{o.label}</Link></li>
                    ))}
                </ul>
                {
                    pageType !== PageType.LANDING
                        ? (
                            <div className={styles.container__search}>
                                <span className="material-icons">search</span>
                                <input type="text" placeholder={placeholder}/>
                            </div>
                        ) : null
                }

            </div>
        </>
    );
}

export default Header;