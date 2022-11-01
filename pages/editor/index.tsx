import React, {useState} from "react";
import Course from "../cursos/[course]";
import style from "./editor.module.scss";
import {EditorAchievementsSection, EditorBannerSection, EditorHookSection} from "../../sections/editor";
import {LandingsType} from "../../types";
import {getCourse} from "../../services/course/courseService";
import {useRouter} from "next/router";
import {LandingIds} from "../../utils/constants";

type Props = {
    landingData: LandingsType
}

const Editor = ({landingData}: Props) => {
    const [data, setData] = useState(JSON.parse(JSON.stringify(landingData)));
    const [showLanding, setShowLanding] = useState(false);
    const router = useRouter();

    const focus = (sectionId: string) => {
        router.push(`#${sectionId}`);
    }

    return (
        <section className={style.container}>
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
                        <button className={style.button_container__button} onClick={() => setData(JSON.parse(JSON.stringify(landingData)))}>Guardar</button>
                        <button className={style.button_container__button} onClick={() => setData(JSON.parse(JSON.stringify(landingData)))}>Reset</button>
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
                />
                <h1>Otra cosa</h1>
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
    );
}

export async function getStaticProps({params}: any) {
    const landingData: LandingsType = await getCourse({id: 'landing'})

    return {props: {landingData}}
}

export default Editor;