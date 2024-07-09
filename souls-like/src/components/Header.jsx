export default () => {
    return (
        <>
            <header className="container nav pt-2">
                <a href="/" className="fs-2">
                    <img src="/vite.svg" alt="icon" />
                    <span hidden>Icon</span>
                </a>

                <nav>
                    <ul className="nav">
                        <li className="nav-item">
                            <a
                                href="https://github.com/danielBRTanimacao"
                                target="_blank"
                            >
                                GitHub
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="https://www.linkedin.com/in/daniel-tenório-6471b0244/"
                                target="_blank"
                            >
                                Linkedin
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="https://www.youtube.com/channel/UCS88R5WOovJNe3NtS0OhUfg"
                                target="_blank"
                            >
                                Youtube
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};
