import React, { useState, useEffect } from "react";
import Knight from "../../assets/player-sprite/knight-idle.png";
import KnightUp from "../../assets/player-sprite/knight-up.png";
import KnightDown from "../../assets/player-sprite/knight-down.png";

export default () => {
    const [imgVariant, setImgVariant] = useState(Knight);
    const [invertImg, setInvertImg] = useState("1");
    const [statePos, setstatePos] = useState({ x: 0, y: 0 });

    const maxScreenWidth = window.innerWidth;

    useEffect(() => {
        window.addEventListener("keydown", (event) => {
            if (event.key == "w") {
                setstatePos((prev) => ({ ...prev, x: prev.x + 10 }));
                setImgVariant(KnightUp);
            }
            if (event.key == "a") {
                setstatePos((prev) => ({ ...prev, y: prev.y - 10 }));
                setInvertImg("1");
                setImgVariant(Knight);
            }
            if (event.key == "s") {
                setstatePos((prev) => ({ ...prev, x: prev.x - 10 }));
                setImgVariant(KnightDown);
            }
            if (event.key == "d") {
                setstatePos((prev) => ({ ...prev, y: prev.y + 10 }));
                setInvertImg("-1");
                setImgVariant(Knight);
            }
        });
    }, []);

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
