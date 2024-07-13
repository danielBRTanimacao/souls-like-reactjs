import { react, useState } from "react";

import MonsterIdle from "../../assets/player-sprite/knight-idle.png";

export default () => {
    const [imgVariant, setImgVariant] = useState(MonsterIdle);
    const [invertImg, setInvertImg] = useState("1");
    const [statePos, setstatePos] = useState({ x: 90, y: 90 });

    return (
        <>
            <div
                style={{
                    position: "relative",
                    bottom: `${statePos.x}px`,
                    left: `${statePos.y}px`,
                    width: "60px",
                    height: "60px"
                }}
            >
                <img
                    src={imgVariant}
                    style={{ width: "60px", transform: `scaleX(${invertImg})` }}
                    alt="img-knight"
                />
            </div>
        </>
    );
};
