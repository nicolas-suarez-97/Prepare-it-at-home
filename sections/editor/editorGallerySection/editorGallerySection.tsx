import React from "react";
import {EditorProps} from "../../../types";
import style from "../editor.module.scss";
import {LandingIds} from "../../../utils/constants";
import {Icons} from "../../../utils/icons";

const EditorGallerySection = ({data, setData, original, focus}: EditorProps) => {
    const {gallery} = data;

    return (
        <section
            className={style.section}
            onFocus={() => focus(LandingIds.GALLERY_SECTION)}
        >
            <h2 className={style.section__title}>Gallery</h2>
            <div className={style.attribute}>
                <h5 className={style.attribute__label}>Título</h5>
                <input
                    className={style.attribute__input}
                    type="text"
                    value={gallery.title}
                    placeholder={original.gallery.title}
                    onChange={e => {
                        gallery.title = e.target.value
                        setData({...data, gallery})
                    }}
                />
                <i
                    className="material-icons"
                    onClick={() => {
                        gallery.images.push('test')
                        setData({...data, gallery})
                    }}
                >{Icons.ADD}</i>
            </div>
            {gallery.images.map((image: string, index: number) => (
                <div key={index} className={style.attribute}>
                    <h5 className={style.attribute__label}>Imagen {index}</h5>
                    <input
                        value={image}
                        className={style.attribute__input}
                        onChange={e => {
                            gallery.images[index] = e.target.value
                            setData({...data, gallery})
                        }}
                    />
                    <i
                        className="material-icons"
                        onClick={() => {
                            gallery.images.splice(index, 1)
                            setData({...data, gallery})
                        }}
                    >{Icons.DELETE}</i>
                </div>
            ))}

        </section>
    );
}

export default EditorGallerySection;