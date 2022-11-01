import React from "react";
import styles from "./hook.module.scss";
import { ActionButton } from "../../../components";
import {HookSectionType} from "../../../types/Sections";
import {LinkDataType} from "../../../types";
import {LandingIds} from "../../../utils/constants";

type Props = {
    hook: HookSectionType,
    linkData: LinkDataType,
}

const HookSection = ({hook, linkData}: Props) => {
    const {title, content, buttonLabel} = hook;

    linkData = {
        ...linkData,
        buttonStyle: styles.hook__actionButton,
        label: buttonLabel
    }

    return (
        <section className={styles.hook} id={LandingIds.HOOK_SECTION}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.hook__content} dangerouslySetInnerHTML={{__html: content}} />
            <ActionButton
                linkData={linkData}
            />
        </section>
    );
}

export default HookSection;