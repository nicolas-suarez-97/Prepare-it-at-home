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
    const [xDistance, setXDistance] = useState(xCoord);
    const [yDistance, setYDistance] = useState(yCoord);

    useEffect(() => {
        if (xCoord !== 0 && yCoord !== 0) {
            const {innerHeight: height} = window;
            setXDistance(xCoord - 220)
            setYDistance(yCoord + 280)

            if (xCoord < 200) {
                setXDistance(20)
            }
            if (yCoord > height) {
                setYDistance(height - 20)
            }
        }


    }, [xCoord, yCoord]);

    return (
        <section className={`${style.container} ${isShown ? style.show : style.hide}`}
                 style={{left: xDistance, top: yDistance}}>
            {Icons.map((icon: string, index: number) => (
                <i key={index} className={`material-icons ${style.icon}`} onClick={() => selectIcon(icon)}>{icon}</i>
            ))}
        </section>
    );
}

export default IconSelector;