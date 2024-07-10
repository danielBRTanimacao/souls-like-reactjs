import React, { useState, useEffect } from "react";

export default () => {
    const [statePos, setstatePos] = useState({ x: 0, y: 0 });

    // const maxScreenWidth = window.innerWidth;

    const movePlayer = (event) => {
        switch (event.key) {
            case "w":
                setstatePos((prev) => ({ ...prev, x: prev.x + 10 }));
                break;
            case "a":
                setstatePos((prev) => ({ ...prev, y: prev.y - 10 }));
                break;
            case "s":
                setstatePos((prev) => ({ ...prev, x: prev.x - 10 }));
                break;
            case "d":
                setstatePos((prev) => ({ ...prev, y: prev.y + 10 }));
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", movePlayer);
        return () => {
            window.removeEventListener("keydown", movePlayer);
        };
    }, []);

    console.log(statePos);

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
                    borderRadius: "100%"
                }}
            >
                <span hidden>Player</span>
            </div>
        </>
    );
};
