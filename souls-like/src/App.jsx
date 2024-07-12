import Header from "./components/Header";
import { Link } from "react-router-dom";

export default () => {
    return (
        <>
            <Header />
            <main className="center-main">
                <article className="row text-center">
                    <h1 className="display-title">Souls Like ReactJs</h1>
                    <div className="col">
                        <Link className="btn fs-bold form-btn" to={"/game"}>
                            JOGAR
                        </Link>
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
