import React from "react";
import { useState } from "react";

export default () => {
    const [initPos, setInitPos] = useState(0);

    function movePlayer(e) {
        console.log(e);
        setInitPos(200);
    }

    return (
        <>
            <div
                onClick={(e) => movePlayer(e)}
                style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    top: `${initPos}px`,
                    left: `${initPos}px`,
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
