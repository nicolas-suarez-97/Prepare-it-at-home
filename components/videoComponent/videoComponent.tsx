import React, {useEffect, useState} from "react";
import styles from "./video.module.scss";
import ReactPlayer from "react-player";
import {VideoType} from "../../types/VideoType";

const VideoComponent = ({videoUrl, play, setPlay}: VideoType) => {
    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);

    return (
        <section className={styles.video}>
            { hasWindow
                ? <ReactPlayer
                    url={videoUrl}
                    playing={play}
                    onPause={setPlay(false)}
                    width="100%"
                    height="100%"
                    controls={true}
                />
                : null
            }
        </section>
    );
}

export default VideoComponent;