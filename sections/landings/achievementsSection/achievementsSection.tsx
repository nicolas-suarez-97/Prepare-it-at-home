import React from "react";
import styles from "./achievement.module.scss";
import { AchievementsSectionType, AchievementItem } from "../../../types/Sections/AchievementsSectionType";

type Props = {
    achievement: AchievementsSectionType
}

const AchievementsSection = ({achievement}: Props) => {
    const {yellow, blue, green, purple, lightBlue, red} = styles;
    const colors = [
        yellow,
        blue,
        green,
        red,
        purple,
        lightBlue,
    ]

    return (
        <section>
            <h2 className={styles.title}>{achievement.title}</h2>
            <ul className={styles.achievement__content}>
                {achievement.items.map((i: AchievementItem, index: number) => (
                    <li key={index} className={styles.achievement__items}>
                        {i.icon
                            ? <span className={`material-icons ${colors[index]}`}>{i.icon}</span>
                            : null
                        }
                        <p dangerouslySetInnerHTML={{__html: i.label}}/>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default AchievementsSection;