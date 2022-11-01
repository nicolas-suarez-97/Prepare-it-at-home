import React from "react";
import {EditorProps} from "../../../types";
import style from "../editor.module.scss";
import {LandingIds} from "../../../utils/constants";


const EditorHookSection = ({data, setData, original, focus}: EditorProps) => {
    const {hook} = data;

    return (
        <section
            className={style.section}
            onFocus={() => focus(LandingIds.HOOK_SECTION)}
        >
            <h2 className={style.section__title}>Hook</h2>
            <div className={style.attribute}>
                <h5 className={style.attribute__label}>Título</h5>
                <input
                    className={style.attribute__input}
                    type="text"
                    value={hook.title}
                    placeholder={original.hook.title}
                    onChange={e => {
                        hook.title = e.target.value
                        setData({...data, hook})
                    }}
                />
            </div>
            <div className={style.attribute}>
                <h5 className={style.attribute__label}>Contenido</h5>
                <input
                    className={style.attribute__input}
                    type="text"
                    value={hook.content}
                    placeholder={original.hook.content}
                    onChange={e => {
                        hook.content = e.target.value
                        setData({...data, hook})
                    }}
                />
            </div>
            <div className={style.attribute}>
                <h5 className={style.attribute__label}>Button Label</h5>
                <input
                    className={style.attribute__input}
                    type="text"
                    value={hook.buttonLabel}
                    placeholder={original.hook.buttonLabel}
                    onChange={e => {
                        hook.buttonLabel = e.target.value
                        setData({...data, hook})
                    }}
                />
            </div>
        </section>
    );
}

export default EditorHookSection;