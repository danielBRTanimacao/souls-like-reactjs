import Player from "./components/player/Player";
import Monster from "./components/monster/Monster";

export default () => {
    return (
        <>
            <main className="maingame">
                <Player />
                <div className="spawner-monsters">
                    <Monster />
                </div>
            </main>
        </>
    );
};
