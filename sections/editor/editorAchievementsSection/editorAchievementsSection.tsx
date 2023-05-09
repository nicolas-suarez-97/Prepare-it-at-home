import React from "react";
import {EditorProps} from "../../../types";
import style from "../editor.module.scss";
import achievementsStyles from "./editorAchievementsSection.module.scss";
import {LandingIds} from "../../../utils/constants";
import {AchievementItem} from "../../../types/Sections/AchievementsSectionType";
import {Icons} from "../../../utils/icons";

const EditorAchievementsSection = ({data, setData, original, focus, iconSelector}: EditorProps) => {
    const {achievement} = data;

    const selectIcon = (icon: string, index: number) => {
        achievement.items[index].icon = icon
        setData({...data, achievement})
    }

    return (
        <section
            className={style.section}
            onFocus={() => focus(LandingIds.ACHIEVEMENTS_SECTION)}
        >
            <h2 className={style.section__title}>Achievements</h2>
            <div className={style.attribute}>
                <h5 className={style.attribute__label}>Título</h5>
                <input
                    className={style.attribute__input}
                    type="text"
                    value={achievement.title}
                    placeholder={original.achievement.title}
                    onChange={e => {
                        achievement.title = e.target.value
                        setData({...data, achievement})
                    }}
                />
            </div>
            <div className={achievementsStyles.title}>
                <h3
                >Items</h3>
                <i className={'material-icons'} onClick={e => {
                    achievement.items.push({label: 'New', icon: 'arrow_drop_down'})
                    setData({...data, achievement})
                }}>{Icons.ADD}</i>
            </div>
            {achievement.items.map((item: AchievementItem, index: number) => (
                <div key={index}>
                    <div className={style.attribute}>
                        <h5 className={style.attribute__label}>Elemento {index}</h5>
                        <textarea
                            value={item.label}
                            className={`${style.attribute__input} ${style.textarea}`}
                            onChange={e => {
                                achievement.items[index].label = e.target.value
                                setData({...data, achievement})
                            }}
                        />
                        <i
                            className={'material-icons'}
                            onClick={e => (iconSelector !== undefined ? iconSelector(e.screenX, e.screenY, selectIcon, index) : null)}
                        >{item.icon}</i>
                        <i
                            className={'material-icons'}
                            onClick={() => {
                                achievement.items.splice(index, 1)
                                setData({...data, achievement})
                            }}
                        >{Icons.DELETE}</i>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default EditorAchievementsSection;