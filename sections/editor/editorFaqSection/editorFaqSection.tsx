import React from "react";
import {EditorProps} from "../../../types";
import style from "../editor.module.scss";
import {LandingIds} from "../../../utils/constants";
import {FaqItem} from "../../../types/Sections/FaqSectionType";
import {Icons} from "../../../utils/icons";

const EditorFaqSection = ({data, setData, original, focus}: EditorProps) => {
    const {faq} = data;

    return (
        <section
            className={style.section}
            onFocus={() => focus(LandingIds.FAQ_SECTION)}
        >
            <h2 className={style.section__title}>FAQ</h2>
            <div className={style.attribute}>
                <h5 className={style.attribute__label}>Título</h5>
                <input
                    className={style.attribute__input}
                    type="text"
                    value={faq.title}
                    placeholder={original.faq.title}
                    onChange={e => {
                        faq.title = e.target.value
                        setData({...data, faq})
                    }}
                />
                <i
                    className="material-icons"
                    onClick={() => {
                        faq.items.push({answer: 'New Answer', question: 'New Question'})
                        setData({...data, faq})
                    }}
                >{Icons.ADD}</i>
            </div>
            {faq.items.map((f: FaqItem, index: number) => (
                <div key={index}>
                    <input
                        className={style.attribute__input}
                        type="text"
                        value={f.question}
                        style={{border: "none"}}
                        onChange={e => {
                            faq.items[index].question = e.target.value
                            setData({...data, faq})
                        }}
                    />
                    <textarea
                        className={style.attribute__input}
                        value={f.answer}
                        style={{width: "100%", height: "80px", borderRadius: "10px"}}
                        onChange={e => {
                            faq.items[index].answer = e.target.value
                            setData({...data, faq})
                        }}
                    />
                    <i
                        className="material-icons"
                        onClick={() => {
                            faq.items.splice(index, 1)
                            setData({...data, faq})
                        }}
                    >{Icons.DELETE}</i>
                </div>
            ))}
        </section>
    );
}

export default EditorFaqSection;