import useEventListener from "@use-it/event-listener";
import React, { useState } from "react";
import Knight from "../../assets/player-sprite/knight-idle.png";
import KnightUp from "../../assets/player-sprite/knight-up.png";
import KnightDown from "../../assets/player-sprite/knight-down.png";

export default () => {
    const [imgVariant, setImgVariant] = useState(Knight);
    const [invertImg, setInvertImg] = useState("1");
    const [statePos, setstatePos] = useState({ x: 0, y: 0 });

    const maxScreenWidth = window.innerWidth;
    useEventListener("keydown", (event) => {
        if (event.key === "w") {
            setstatePos({ x: statePos.x + 10, y: statePos.y });
            setImgVariant(KnightUp);
        } else if (event.key === "a") {
            setstatePos({ x: statePos.x, y: statePos.y - 10 });
            setInvertImg("1");
            setImgVariant(Knight);
        } else if (event.key === "s") {
            setstatePos({ x: statePos.x - 10, y: statePos.y });
            setImgVariant(KnightDown);
        } else if (event.key === "d") {
            setstatePos({ x: statePos.x, y: statePos.y + 10 });
            setInvertImg("-1");
            setImgVariant(Knight);
        }
    });

    return (
        <>
            <div
                style={{
                    position: "relative",
                    bottom: `${statePos.x}px`,
                    left: `${statePos.y}px`,
                    width: "60px",
                    height: "60px",
                    imageRendering: "pixelated"
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
