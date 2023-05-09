import React from "react";
import {EditorProps} from "../../../types";
import style from "../editor.module.scss";
import {LandingIds} from "../../../utils/constants";
import {ModuleStep} from "../../../types/Sections/ModulesSectionType";
import {Icons} from "../../../utils/icons";


const EditorModulesSection = ({data, setData, original, focus, iconSelector}: EditorProps) => {
    const {modules} = data;

    const selectIcon = (icon: string, index: number) => {
        modules.itemsIcon = icon
        setData({...data, modules})
    }

    return (
        <section
            className={style.section}
            onFocus={() => focus(LandingIds.MODULES_SECTION)}
        >
            <h2 className={style.section__title}>Modules</h2>
            <div className={style.attribute}>
                <h5 className={style.attribute__label}>Título</h5>
                <input
                    className={style.attribute__input}
                    type="text"
                    value={modules.title}
                    placeholder={original.modules.title}
                    onChange={e => {
                        modules.title = e.target.value
                        setData({...data, modules})
                    }}
                />
                <i
                    className="material-icons"
                    onClick={e => (iconSelector !== undefined ? iconSelector(e.screenX, e.screenY, selectIcon) : null)}
                >{modules.itemsIcon}</i>
                <i
                    className="material-icons"
                    onClick={() => {
                        modules.steps.push({title: 'new step', items: []})
                        setData({...data, modules})
                    }}
                >{Icons.ADD}</i>
            </div>
            {modules.steps.map((step: ModuleStep, index: number) => (
                <div className={style.attribute} key={'step'+index} style={{flexDirection: "column"}}>
                    <div className={style.attribute} style={{width: "100%"}}>
                        <input
                            value={step.title}
                            className={style.attribute__input}
                            onChange={e => {
                                modules.steps[index].title = e.target.value
                                setData({...data, modules})
                            }}
                        />
                        <i
                            className="material-icons"
                            onClick={() => {
                                modules.steps[index].items.push('new item')
                                setData({...data, modules})
                            }}
                        >{Icons.ADD}</i>
                        <i
                            className="material-icons"
                            onClick={() => {
                                modules.steps.splice(index, 1)
                                setData({...data, modules})
                            }}
                        >{Icons.DELETE}</i>
                    </div>

                    <div style={{width: "100%"}}>
                        {step.items.map((s, j) => (
                            <div key={'item'+j} className={style.attribute}>
                                <label className={style.attribute__label}>{j}</label>
                                <input
                                    key={'item'+j}
                                    value={s}
                                    className={style.attribute__input}
                                    style={{border: "none"}}
                                    onChange={e => {
                                        modules.steps[index].items[j] = e.target.value
                                        setData({...data, modules})
                                    }}
                                />
                                <i
                                    className="material-icons"
                                    onClick={() => {
                                        modules.steps[index].items.splice(j, 1)
                                        setData({...data, modules})
                                    }}
                                >{Icons.DELETE}</i>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default EditorModulesSection;