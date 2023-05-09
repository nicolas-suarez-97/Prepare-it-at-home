import React from "react";
import {EditorProps} from "../../../types";
import style from "../editor.module.scss";
import {LandingIds} from "../../../utils/constants";
import {Icons} from "../../../utils/icons";
import {BenefitItem} from "../../../types/Sections/BenefitsSectionType";

const EditorBenefitsSection = ({data, setData, original, focus, iconSelector}: EditorProps) => {
    const {benefits} = data;

    const selectIcon = (icon: string, index: number) => {
        benefits.benefitsList[index].icon = icon
        setData({...data, benefits})
    }

    return (
        <section
            className={style.section}
            onFocus={() => focus(LandingIds.BENEFITS_SECTION)}
        >
            <h2 className={style.section__title}>Benefits</h2>
            <div className={style.attribute}>
                <h5 className={style.attribute__label}>Título</h5>
                <input
                    className={style.attribute__input}
                    type="text"
                    value={benefits.title}
                    placeholder={original.benefits.title}
                    onChange={e => {
                        benefits.title = e.target.value
                        setData({...data, benefits})
                    }}
                />
            </div>
            <div className={style.attribute}>
                <h5 className={style.attribute__label}>Url Certificado</h5>
                <input
                    className={style.attribute__input}
                    type="text"
                    value={benefits.certificateUrl}
                    placeholder={original.benefits.certificateUrl}
                    onChange={e => {
                        benefits.certificateUrl = e.target.value
                        setData({...data, benefits})
                    }}
                />
            </div>
            <div className={style.attribute}>
                <h5 className={style.attribute__label}>Url Garantía</h5>
                <input
                    className={style.attribute__input}
                    type="text"
                    value={benefits.warrantyUrl}
                    placeholder={original.benefits.warrantyUrl}
                    onChange={e => {
                        benefits.warrantyUrl = e.target.value
                        setData({...data, benefits})
                    }}
                />
            </div>
            <div className={style.attribute}>
                <h5 className={style.attribute__label}>Items</h5>
                <i
                    className="material-icons"
                    onClick={() => {
                        benefits.benefitsList.push({icon: Icons.ARROW_DROP_DOWN, label: 'new'})
                        setData({...data, benefits})
                    }}
                >{Icons.ADD}</i>
            </div>
            <div>
                {benefits.benefitsList.map((benefit: BenefitItem, index: number) => (
                    <div className={style.attribute} key={index}>
                        <input
                            type="text"
                            className={style.attribute__input}
                            style={{border: "none"}}
                            value={benefit.label}
                            onChange={(e) => {
                                benefits.benefitsList[index].label = e.target.value
                                setData({...data, benefits})
                            }}
                        />
                        <i
                            className="material-icons"
                            onClick={e => (
                                iconSelector !== undefined ? iconSelector(e.screenX, e.screenY, selectIcon, index) : null
                            )}
                        >{benefit.icon}</i>
                        <i
                            className="material-icons"
                            onClick={() => {
                                benefits.benefitsList.splice(index, 1)
                                setData({...data, benefits})
                            }}
                        >{Icons.DELETE}</i>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default EditorBenefitsSection;