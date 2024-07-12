import React, { useState, useEffect } from "react";
import Knight from "../../assets/player-sprite/knight-idle.png";

export default () => {
    const [statePos, setstatePos] = useState({ x: 0, y: 0 });

    // const maxScreenWidth = window.innerWidth;

    useEffect(() => {
        window.addEventListener("keydown", (event) => {
            if (event.key == "w") {
                setstatePos((prev) => ({ ...prev, x: prev.x + 10 }));
            }
            if (event.key == "a") {
                setstatePos((prev) => ({ ...prev, y: prev.y - 10 }));
            }
            if (event.key == "s") {
                setstatePos((prev) => ({ ...prev, x: prev.x - 10 }));
            }
            if (event.key == "d") {
                setstatePos((prev) => ({ ...prev, y: prev.y + 10 }));
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
                    backgroundColor: "red",
                    borderRadius: "100%",
                    background: `url(${Knight}) no-repeat center`
                }}
            >
                <span hidden>Player</span>
            </div>
        </>
    );
};
