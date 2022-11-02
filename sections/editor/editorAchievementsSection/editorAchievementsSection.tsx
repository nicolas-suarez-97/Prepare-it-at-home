import React, {useState} from "react";
import {EditorProps} from "../../../types";
import style from "../editor.module.scss";
import achievementsStyles from "./editorAchievementsSection.module.scss";
import {LandingIds} from "../../../utils/constants";
import {AchievementItem} from "../../../types/Sections/AchievementsSectionType";
import {IconSelector} from "../../../components";
import {Icons} from "../../../utils/icons";

const EditorAchievementsSection = ({data, setData, original, focus}: EditorProps) => {
    const {achievement} = data;
    const [showIconSelector, setShowIconSelector] = useState(false);
    const [xCoord, setXCoord] = useState(0);
    const [yCoord, setYCoord] = useState(0);
    const [itemIndex, setItemIndex] = useState(-1);

    const iconSelector = (x: number, y: number, index: number) => {
        setItemIndex(index)
        setXCoord(x);
        setYCoord(y);
        setShowIconSelector(true);
    }

    const hideIconSelector = () => {
        setShowIconSelector(false);
    }

    const selectIcon = (icon: string) => {
        achievement.items[itemIndex].icon = icon
        setData({...data, achievement})
        setShowIconSelector(false)
        setYCoord(0)
        setXCoord(0)
    }

    return (
        <section
            className={style.section}
            onClickCapture={() => hideIconSelector()}
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
                            onClick={e => (iconSelector(e.screenX, e.screenY, index))}
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
            <IconSelector
                isShown={showIconSelector}
                xCoord={xCoord}
                yCoord={yCoord}
                selectIcon={selectIcon}
            />
        </section>
    );
}

export default EditorAchievementsSection;