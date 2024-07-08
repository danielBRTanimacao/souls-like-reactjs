export default () => {
    function movePlayer(e) {
        console.log(e);
    }

    return (
        <>
            <div className="player" onClick={(e) => movePlayer(e)}>
                <span hidden>Player</span>
            </div>
        </>
    );
};
