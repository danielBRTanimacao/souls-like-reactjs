import Header from "./components/Header";

export default () => {
    return (
        <>
            <Header />
            <main className="center-main">
                <article className="row text-center">
                    <h1 className="display-title">Souls Like ReactJs</h1>
                    <div className="col">
                        <a href={"/game/"} className="btn fs-bold form-btn">
                            JOGAR
                        </a>
                    </div>
                    <div className="col">
                        <a href="#" className="btn fs-bold form-btn">
                            creditos
                        </a>
                    </div>
                </article>
            </main>
        </>
    );
};
