import React from "react";
import {EditorProps} from "../../../types";
import style from "../editor.module.scss";
import {LandingIds} from "../../../utils/constants";


const EditorProducerSection = ({data, setData, original, focus}: EditorProps) => {
    const {producer} = data;

    return (
        <section
            className={style.section}
            onFocus={() => focus(LandingIds.PRODUCER_SECTION)}
        >
            <h2 className={style.section__title}>Producer</h2>
            <div className={style.attribute}>
                <h5 className={style.attribute__label}>Título</h5>
                <input
                    className={style.attribute__input}
                    type="text"
                    value={producer.title}
                    placeholder={original.producer.title}
                    onChange={e => {
                        producer.title = e.target.value
                        setData({...data, producer})
                    }}
                />
            </div>
            <div className={style.attribute}>
                <h5 className={style.attribute__label}>Descripción</h5>
                <textarea
                    className={`${style.attribute__input} ${style.textarea}`}
                    value={producer.description}
                    placeholder={original.producer.description}
                    onChange={e => {
                        producer.description = e.target.value
                        setData({...data, producer})
                    }}
                />
            </div>
        </section>
    );
}

export default EditorProducerSection;