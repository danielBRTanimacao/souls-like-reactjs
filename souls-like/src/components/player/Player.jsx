import React from "react";
import { useState } from "react";

export default () => {
    const [topPos, settopPos] = useState(0);
    const [leftPos, setleftPos] = useState(0);

    const maxScreenWidth = window.innerWidth;

    addEventListener("keydown", (event) => {
        if (event.key == "w") {
            settopPos((pos) => (pos += 1));
            // settopPos(Math.floor(Math.random() * (200 - -200 + 1)) + -200);
        } else if (event.key == "s") {
            settopPos((pos) => (pos -= 1));
        } else if (event.key == "d") {
            setleftPos((pos) => (pos += 1));
        } else if (event.key == "a") {
            setleftPos((pos) => (pos -= 1));
        }
    });

    return (
        <>
            <div
                style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    top: `${topPos}px`,
                    left: `${leftPos}px`,
                    width: "60px",
                    height: "60px",
                    backgroundColor: "red",
                    borderRadius: "100%",
                    cursor: "pointer"
                }}
            >
                <span hidden>Player</span>
            </div>
        </>
    );
};
