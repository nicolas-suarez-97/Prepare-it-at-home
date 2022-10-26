import React from "react";
import {LandingsType} from "../../../types";

type Props = {
    data: LandingsType,
    setData: Function,
}

const EditorBannerSection = ({data, setData}: Props) => {
    const {banner} = data;

    return (
        <section>
            <input
                type="text"
                value={banner.title}
                placeholder="Banner Title"
                onChange={e => {
                    banner.title = e.target.value
                    setData({...data, banner})
                }}
            />
        </section>
    );
}

export default EditorBannerSection;