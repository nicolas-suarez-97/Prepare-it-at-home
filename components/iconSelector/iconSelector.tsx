import React, {useEffect, useState} from "react";
import style from "./iconSelector.module.scss";
import {Icons} from "../../utils/icons";

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
        const {innerHeight: height, innerWidth: width} = window;
        setXDistance(xCoord)
        setYDistance(yCoord)

        if (width / 2 > xCoord) {
            setXDistance(xCoord-200)
        }

        if (height < yCoord) {
            setYDistance(yCoord-140)
        }

    }, [xCoord, yCoord]);

    return (
        <section className={`${style.container} ${isShown ? style.show : style.hide}`} style={{left: xDistance, top: yDistance}}>
            {Icons.map((icon: string, index: number) => (
                <i key={index} className={`material-icons ${style.icon}`} onClick={() => selectIcon(icon)}>{icon}</i>
            ))}
        </section>
    );
}

export default IconSelector;