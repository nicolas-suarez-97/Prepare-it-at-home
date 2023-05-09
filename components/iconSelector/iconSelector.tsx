import React, {useEffect, useState} from "react";
import style from "./iconSelector.module.scss";
import {IconList} from "../../utils/icons";

type Props = {
    selectIcon: Function,
    isShown: boolean,
    xCoord: number,
    yCoord: number,
}

const IconSelector = ({selectIcon, isShown, xCoord, yCoord}: Props) => {
    const [xDistance, setXDistance] = useState(0);
    const [yDistance, setYDistance] = useState(0);

    useEffect(() => {
        if (xCoord !== 0 && yCoord !== 0) {
            const {innerHeight: height, innerWidth: width} = window;
            setXDistance(xCoord - 220)
            setYDistance(yCoord - 100)

            if (xCoord < 200) {
                setXDistance(20)
            }
            if (width <= 460) {
                setXDistance(20)
            }
            if (yCoord > height-280) {
                setYDistance(height - 300)
            }
        }
    }, [xCoord, yCoord]);

    return (
        <section className={`${style.container} ${isShown ? style.show : style.hide}`}
                 style={{left: xDistance, top: yDistance}}>
            {IconList.map((icon: string, index: number) => (
                <i key={index} className={`material-icons ${style.icon}`} onClick={() => selectIcon(icon)}>{icon}</i>
            ))}
        </section>
    );
}

export default IconSelector;