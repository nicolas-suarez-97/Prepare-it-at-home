import React, {useState} from "react";
import Course from "../cursos/[course]";
import style from "./editor.module.scss";
import {
    EditorAchievementsSection,
    EditorBannerSection, EditorBenefitsSection, EditorFaqSection,
    EditorGallerySection, EditorGetStartedSection,
    EditorHookSection, EditorReviewsSection
} from "../../sections/editor";
import {LandingsType} from "../../types";
import {getAllLandings, getLanding} from "../../services/landing/landingProvider";
import {addLanding, updateLanding, deleteLanding} from "../../services/landing/landingService";
import {useRouter} from "next/router";
import EditorProducerSection from "../../sections/editor/editorProducerSection/editorProducerSection";
import EditorModulesSection from "../../sections/editor/editorModulesSection/editorModulesSection";
import {IconSelector} from "../../components";

type Props = {
    landingData: LandingsType
}

const Landing = ({landingData}: Props) => {
    const [data, setData] = useState(JSON.parse(JSON.stringify(landingData)));
    const [showLanding, setShowLanding] = useState(false);
    const [showIconSelector, setShowIconSelector] = useState(false);
    const [xCoord, setXCoord] = useState(0);
    const [yCoord, setYCoord] = useState(0);
    const [modifyIndex, setModifyIndex] = useState(-1);
    const [fn, setFn] = useState();
    const router = useRouter();

    const iconSelector = (x: number, y: number, fn: Function, index: number) => {
        setModifyIndex(index)
        // @ts-ignore
        setFn(() => fn)
        setXCoord(x);
        setYCoord(y);
        setShowIconSelector(true);
    }

    const hideIconSelector = () => {
        setShowIconSelector(false);
    }

    const selectIcon = (icon: string) => {
        // @ts-ignore
        fn(icon, modifyIndex)
        setShowIconSelector(false)
        setYCoord(0)
        setXCoord(0)
    }

    const focus = (sectionId: string) => {
        router.push(`#${sectionId}`);
    }

    return (
        <>
            <section className={style.container} onClickCapture={() => hideIconSelector()}>
                <div className={`${style.editor} ${showLanding ? style.hide : style.show}`}>
                    <div className={style.header}>
                        <input
                            className={style.landing_id}
                            type="text"
                            value={data.id}
                            placeholder={landingData.id}
                            onChange={e => {
                                setData({...data, id: e.target.value})
                            }}
                        />
                        <div className={style.button_container}>
                            <button className={style.button_container__button}
                                    onClick={() => {
                                        data._id === null ? addLanding(data, router) : updateLanding(data, router)
                                    }}>Guardar
                            </button>
                            <button className={style.button_container__button}
                                    onClick={() => setData(JSON.parse(JSON.stringify(landingData)))}>Reset
                            </button>
                            <button className={style.button_container__button}
                                    onClick={() => deleteLanding(data._id, router)}>Delete
                            </button>
                        </div>
                    </div>
                    <EditorBannerSection
                        data={data}
                        setData={setData}
                        original={landingData}
                        focus={focus}
                    />
                    <EditorHookSection
                        data={data}
                        setData={setData}
                        original={landingData}
                        focus={focus}
                    />
                    <EditorAchievementsSection
                        data={data}
                        setData={setData}
                        original={landingData}
                        focus={focus}
                        iconSelector={iconSelector}
                    />
                    <EditorGallerySection
                        data={data}
                        setData={setData}
                        original={landingData}
                        focus={focus}
                    />
                    <EditorProducerSection
                        data={data}
                        setData={setData}
                        original={landingData}
                        focus={focus}
                    />
                    <EditorModulesSection
                        data={data}
                        setData={setData}
                        original={landingData}
                        focus={focus}
                        iconSelector={iconSelector}
                    />
                    <EditorBenefitsSection
                        data={data}
                        setData={setData}
                        original={landingData}
                        focus={focus}
                        iconSelector={iconSelector}
                    />
                    <EditorReviewsSection
                        data={data}
                        setData={setData}
                        original={landingData}
                        focus={focus}
                    />
                    <EditorGetStartedSection
                        data={data}
                        setData={setData}
                        original={landingData}
                        focus={focus}
                    />
                    <EditorFaqSection
                        data={data}
                        setData={setData}
                        original={landingData}
                        focus={focus}
                    />
                    <br/>
                </div>
                <div className={`${style.landing} ${showLanding ? style.show : style.hide}`}>
                    <Course
                        course="landing"
                        landingData={data}
                    />
                </div>
                <button
                    className={`${style.button_container__button} ${style.toogle_view}`}
                    onClick={() => setShowLanding(!showLanding)}
                >{showLanding ? 'Editor' : 'Landing'}</button>
            </section>
            <IconSelector
                isShown={showIconSelector}
                xCoord={xCoord}
                yCoord={yCoord}
                selectIcon={selectIcon}
            />
        </>
    );
}

export async function getStaticProps({params}: any) {
    if (params.landing === 'new') {
        const landingData: LandingsType = await getLanding({id: 'landing'})
        landingData._id = null;
        landingData.id = 'new id'

        return {props: {landingData}}
    }

    const landingData: LandingsType = await getLanding({id: params.landing})
    return {props: {landingData}}
}

export async function getStaticPaths() {
    const landings = await getAllLandings();

    const paths = landings.map((landing: LandingsType) => ({
        params: {landing: landing.id}
    }))
    paths.push({
        params: {landing: 'new'}
    })

    return { paths, fallback: false }
}

export default Landing;