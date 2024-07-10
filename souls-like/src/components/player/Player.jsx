import React, { useState } from "react";

export default () => {
    const initialsPositions = {
        x: 250,
        y: 250
    };
    const [statePos, setstatePos] = useState(initialsPositions);

    const maxScreenWidth = window.innerWidth;

    window.addEventListener("keydown", (event) => {
        // let eventsList = ["w", "s", "d", "a"];
        console.log(event.key, statePos);

        if (event.key === "w") {
            setstatePos({ x: statePos.x + 20, y: statePos.y });
        } else if (event.key === "s") {
            setstatePos({ x: statePos.x - 20, y: statePos.y });
        } else if (event.key === "d") {
            setstatePos({ x: statePos.x, y: statePos.y + 20 });
        } else if (event.key === "a") {
            setstatePos({ x: statePos.x, y: statePos.y - 20 });
        }
    });

    return (
        <>
            <div
                style={{
                    position: "absolute",
                    bottom: `${initialsPositions.x}px`,
                    left: `${initialsPositions.y}px`,
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
