import React, {useState} from "react";
import Course from "../cursos/[course]";
import style from "./editor.module.scss";
import {EditorBannerSection} from "../../sections/editor";
import {LandingsType} from "../../types";
import {getCourse} from "../../services/course/courseService";

type Props = {
    landingData: LandingsType
}

const Editor = ({landingData}: Props) => {
    const [data, setData] = useState(landingData);

    return (
        <section className={style.container}>
            <div className={style.editor}>
                <EditorBannerSection
                    data={data}
                    setData={setData}
                />
            </div>
            <div className={style.landing}>
                <Course
                    course="landing"
                    landingData={data}
                />
            </div>
        </section>
    );
}

export async function getStaticProps({params}: any) {
    const landingData: LandingsType = await getCourse({id: 'landing'})

    return {props: {landingData}}
}

export default Editor;