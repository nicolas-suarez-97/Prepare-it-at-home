import React from "react";
import {EditorProps} from "../../../types";
import style from "../editor.module.scss";
import {LandingIds} from "../../../utils/constants";

const EditorBannerSection = ({data, setData, original, focus}: EditorProps) => {
    const {banner} = data;

    return (
        <section
            className={style.section}
            onFocus={() => focus(LandingIds.BANNER_SECTION)}
        >
            <h2 className={style.section__title}>Banner</h2>
            <div className={style.attribute}>
                <h5 className={style.attribute__label}>Título</h5>
                <input
                    className={style.attribute__input}
                    type="text"
                    value={banner.title}
                    placeholder={original.banner.title}
                    onChange={e => {
                        banner.title = e.target.value
                        setData({...data, banner})
                    }}
                />
            </div>
            <div className={style.attribute}>
                <h5 className={style.attribute__label}>Subtitulo</h5>
                <input
                    className={style.attribute__input}
                    type="text"
                    value={banner.subtitle}
                    placeholder={original.banner.subtitle}
                    onChange={e => {
                        banner.subtitle = e.target.value
                        setData({...data, banner})
                    }}
                />
            </div>
            <div className={style.attribute}>
                <h5 className={style.attribute__label}>Imagen</h5>
                <input
                    className={style.attribute__input}
                    type="text"
                    value={banner.backgroundImage}
                    placeholder={original.banner.backgroundImage}
                    onChange={e => {
                        banner.backgroundImage= e.target.value
                        setData({...data, banner})
                    }}
                />
                <input
                    checked={banner.isCircle}
                    type="checkbox"
                    onChange={e => {
                        banner.isCircle = !banner.isCircle
                        setData({...data, banner})
                    }}
                />
            </div>
            <div className={style.attribute}>
                <h5 className={style.attribute__label}>Botón 1</h5>
                <input
                    className={style.attribute__input}
                    type="text"
                    value={banner.primaryButtonLabel}
                    placeholder={original.banner.primaryButtonLabel}
                    onChange={e => {
                        banner.primaryButtonLabel= e.target.value
                        setData({...data, banner})
                    }}
                />
            </div>
            <div className={style.attribute}>
                <h5 className={style.attribute__label}>Botón 2</h5>
                <input
                    className={style.attribute__input}
                    type="text"
                    value={banner.secondaryButtonLabel}
                    placeholder={original.banner.secondaryButtonLabel}
                    onChange={e => {
                        banner.secondaryButtonLabel= e.target.value
                        setData({...data, banner})
                    }}
                />
            </div>
        </section>
    );
}

export default EditorBannerSection;