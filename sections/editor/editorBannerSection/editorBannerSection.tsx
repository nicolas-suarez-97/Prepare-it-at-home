import React from "react";
import {LandingsType} from "../../../types";

type Props = {
    data: LandingsType,
    setData: Function,
}

const EditorBannerSection = ({data, setData}: Props) => {
    const {banner} = data;
    console.log({banner})

    return (
        <section>
            <input
                type="text"
                value={banner.title}
                placeholder="Video Url"
                onChange={e => {
                    const auxBanner = banner;
                    auxBanner.title = e.target.value
                    setData({...data, banner: auxBanner})
                }}
            />
        </section>
    );
}

export default EditorBannerSection;