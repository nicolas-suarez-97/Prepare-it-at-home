import React, {useRef, useState} from "react";
import styles from "./topBanner.module.scss";
import { ActionButton, VideoComponent } from "../../../components";
import {BannerSectionType} from "../../../types/Sections";
import {LinkDataType} from "../../../types";

type Props = {
    videoUrl: string,
    banner: BannerSectionType,
    linkData: LinkDataType,
}

const TopBannerSection = ({videoUrl, banner, linkData}: Props) => {
    const {title, subtitle, backgroundImage, isCircle, primaryButtonLabel, secondaryButtonLabel} = banner;
    linkData = {
        ...linkData,
        buttonStyle: styles.banner__button,
        label: primaryButtonLabel
    }
    const [play, setPlay] = useState(false);
    const videoSectionRef = useRef(null);

    const scrollToVideo = () => {
        window.scroll({
            // @ts-ignore
            top: videoSectionRef.current.getBoundingClientRect().top - 50,
            behavior: "smooth"
        })
        setPlay(true)
    };

    return (
        <>
            <section className={styles.banner}>
                <div className={styles.banner__content}>
                    <h1 className={styles.banner__title}>{title}</h1>
                    <h2 className={styles.banner__subtitle}>{subtitle}</h2>
                    <img alt="" src={backgroundImage} className={`${styles.banner__mobileBackground} ${isCircle ? styles.circle : null}`}/>
                    <div className={styles.banner__buttonRow}>
                        <ActionButton
                            linkData={linkData}
                        />
                        <div className={styles.banner__moreButton}>
                            <span className="material-icons">play_arrow</span>
                            <a
                                onClick={scrollToVideo}
                            >{secondaryButtonLabel}</a>
                        </div>
                    </div>
                </div>
                <img alt="" src={backgroundImage} className={`${styles.banner__background} ${isCircle ? styles.circle : null}`}/>
            </section>
            { videoUrl
                ? (
                    <section
                        ref={videoSectionRef}
                    >
                        <VideoComponent
                            videoUrl={videoUrl}
                            play={play}
                            setPlay={setPlay}
                        />
                    </section>
                )
                : null}
        </>

    );
}

export default TopBannerSection;