export default () => {
    function movePlayer() {
        console.log("movimento");
    }

    return (
        <>
            <div id="playerAction" className="player">
                <span hidden>Player</span>
            </div>
        </>
    );
};
