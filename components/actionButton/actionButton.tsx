import React from "react";
import styles from "./actionButton.module.scss";
import * as ga from '../../lib/ga';
import {LinkDataType} from "../../types";
import * as fbq from "../../lib/fbpixel";

type Props = {
    linkData: LinkDataType
}

const ActionButton = ({linkData}: Props) => {
    const {url, label, buttonStyle, onClickAction, course} = linkData;
    const gaEvent = {
        action: 'button_click',
        params: {
            'link': url,
            'label': label,
            'page_name': '/cursos/' + course,
        },
    }

    return onClickAction !== undefined ?
        (
            <a
                onClick={() => {
                    onClickAction(true)
                    ga.event(gaEvent)
                    fbq.event("possible_lead")
                }}
                className={`${styles.button} ${buttonStyle}`}
                target="_blank"
                rel="noreferrer"
            >
                {label}
            </a>
        ) : (
            <a
                href={url}
                className={`${styles.button} ${buttonStyle}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                    ga.event(gaEvent)
                    fbq.event("possible_lead")
                }}
            >
                {label}
            </a>
        );
}

export default ActionButton;
