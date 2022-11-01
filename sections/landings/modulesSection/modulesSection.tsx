import React, {useRef, useState} from "react";
import styles from "./modules.module.scss";
import {ModulesSectionType, ModuleStep} from "../../../types/Sections/ModulesSectionType";
import {LandingIds} from "../../../utils/constants";

type Props = {
    modules: ModulesSectionType,
}

const ModulesSection = ({modules}: Props) => {
    const {title, steps, itemsIcon} = modules;
    const [expand, setExpand] = useState(false);
    const ref = useRef(null);
    // @ts-ignore
    const scroll = () => ref.current.scrollIntoView();

    const toggleExpand = () => {
        if (expand) {
            setExpand(false)
            scroll()
        } else {
            setExpand(true)
        }

    }

    return (
        <section className={styles.modules} ref={ref} id={LandingIds.MODULES_SECTION}>
            <h2 className={styles.title} id="modules">{title}</h2>
            <div className={`${styles.modules__container} ${expand ? '' : styles.reduce}`}>
                <div>
                    {steps.map((step: ModuleStep, index: number) => (
                        <div key={index} className={styles.modules__content}>
                            <h4 className={`${styles.modules__title}`}>{step.title}</h4>
                            <ul className={`${styles.modules__list}`}>
                                {step.items.map((item: string) => (
                                    <li key={item} className={styles.modules__item}>
                                        <span className="material-icons">{itemsIcon}</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    {steps.length > 0 ?
                        <div className={styles.modules__content}>
                            <span className={styles.modules__title}/>
                        </div>
                        : null
                    }
                </div>
                <div className={`${styles.modules__shadow} ${expand ? styles.expand : ''}`}/>
            </div>
            <div className={styles.modules__icon}><span
                className={`material-icons ${expand ? styles.rotateOn : styles.rotateOff}`}
                onClick={toggleExpand}>expand_more</span></div>
        </section>
    );
}

export default ModulesSection;