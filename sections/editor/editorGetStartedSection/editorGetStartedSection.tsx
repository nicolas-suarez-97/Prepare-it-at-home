import React from "react";
import {EditorProps} from "../../../types";
import style from "../editor.module.scss";
import {LandingIds} from "../../../utils/constants";

const EditorGetStartedSection = ({data, setData, original, focus}: EditorProps) => {
    const {getStarted} = data;

    return (
        <section
            className={style.section}
            onFocus={() => focus(LandingIds.GET_STARTED_SECTION)}
        >
            <h2 className={style.section__title}>Get Started</h2>
            <div className={style.attribute}>
                <h5 className={style.attribute__label}>Título</h5>
                <input
                    className={style.attribute__input}
                    type="text"
                    value={getStarted.title}
                    placeholder={original.getStarted.title}
                    onChange={e => {
                        getStarted.title = e.target.value
                        setData({...data, getStarted})
                    }}
                />
            </div>
            <div className={style.attribute}>
                <h5 className={style.attribute__label}>Subtitulo</h5>
                <input
                    className={style.attribute__input}
                    type="text"
                    value={getStarted.subtitle}
                    placeholder={original.getStarted.subtitle}
                    onChange={e => {
                        getStarted.subtitle = e.target.value
                        setData({...data, getStarted})
                    }}
                />
            </div>
            <div className={style.attribute}>
                <h5 className={style.attribute__label}>Text botón</h5>
                <input
                    className={style.attribute__input}
                    type="text"
                    value={getStarted.buttonLabel}
                    placeholder={original.getStarted.buttonLabel}
                    onChange={e => {
                        getStarted.buttonLabel = e.target.value
                        setData({...data, getStarted})
                    }}
                />
            </div>
            <div className={style.attribute}>
                <h5 className={style.attribute__label}>Url Imagen</h5>
                <input
                    className={style.attribute__input}
                    type="text"
                    value={getStarted.imageUrl}
                    placeholder={original.getStarted.imageUrl}
                    onChange={e => {
                        getStarted.imageUrl = e.target.value
                        setData({...data, getStarted})
                    }}
                />
            </div>
        </section>
    );
}

export default EditorGetStartedSection;