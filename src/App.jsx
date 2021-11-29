import { useState } from 'react';
import './App.scss';

function App() {

    // light mode state
    const [isLightModeActive, setIsLightModeActive] = useState(false);

    // light mode toggle function
    const switchModes = () => { setIsLightModeActive(!isLightModeActive); }

    return (
        <>
            <header id="home">
                {/* Navbar */}
                <nav className={isLightModeActive ? "navbar navbar-expand-lg navbar-light bg-light fixed-top" : "navbar navbar-expand-lg navbar-dark bg-dark fixed-top"}>
                    {/* Container wrapper */}
                    <div className="container-fluid">
                        {/* Toggle button */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fas fa-bars" />
                        </button>

                        {/* Collapsible wrapper */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Navbar brand */}
                            <a className="navbar-brand" href="">
                                <h1 className="navbar_title text_shadow">JS</h1>
                            </a>
                            {/* Left links */}
                            <ul className="navbar-nav me-auto font-weight-bold">
                                <li className="nav-item">
                                    <a className="nav-link" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#skills">Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#projects">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul>
                            {/* Left links */}
                        </div>
                        {/* Collapsible wrapper */}

                        {/* Right elements */}
                        <div className="d-flex align-items-center text-center">
                            {/* resume button */}
                            <a className={isLightModeActive ? "btn btn-dark me-4 shadow-2-strong text-light" : "btn btn-light me-4 shadow-4-strong"}
                                href="https://drive.google.com/file/d/1qzcJjbT22vJWuZY1T84ijxm1pZ8RJ0-q/view?usp=sharing">
                                <div className="font-weight-bold">My Resume</div>
                            </a>
                            {/* GitHub icon */}
                            <a className="me-4" href="https://github.com/jesse318s">
                                <i className={isLightModeActive ? "fab fa-github fa-2x" : "fab fa-github fa-2x text_shadow"} />
                                <aside className="font-weight-bold">GitHub</aside>
                            </a>
                            {/* light mode toggle */}
                            <a className={isLightModeActive ? "toggle_light me-4 link-dark" : "toggle_light me-4 link-warning"} onClick={() => switchModes()}>
                                <i className={isLightModeActive ? "fas fa-adjust fa-2x moon" : "fas fa-adjust fa-2x sun"} />
                                <aside className="font-weight-bold">Mode</aside>
                            </a>
                        </div>
                        {/* Right elements */}
                    </div>
                    {/* Container wrapper */}
                </nav>
                {/* Navbar */}
            </header>

            <main className={isLightModeActive ? "bg-light text-dark" : "bg-dark text-light"}>
                {/* background image */}
                <section style={{
                    background: `url('${process.env.PUBLIC_URL}/img/landing_img.webp')`,
                    backgroundSize: "cover",
                    height: "100vh",
                    width: "99.1vw"
                }}>
                    {/* popout animation */}
                    <p className="popout">
                        <span>J</span>
                        <span>E</span>
                        <span>S</span>
                        <span>S</span>
                        <span>E&nbsp;</span>
                        <span>S</span>
                        <span>I</span>
                        <span>T</span>
                        <span>E</span>
                        <span>S&nbsp;</span>
                        <span>-</span><br />
                        <span>W</span>
                        <span>E</span>
                        <span>B&nbsp;</span>
                        <span>D</span>
                        <span>E</span>
                        <span>V</span>
                        <span>E</span>
                        <span>L</span>
                        <span>O</span>
                        <span>P</span>
                        <span>E</span>
                        <span>R</span>
                    </p>
                    {/* down button */}
                    <div className="d-flex justify-content-center">
                        <a href="#skills"
                            className={isLightModeActive ? "btn btn-light btn-rounded btn-outline-* btn-lg blink" : "btn btn-dark btn-rounded btn-outline-* btn-lg blink"}>
                            <i className="fas fa-angle-down fa-2x" /></a>
                    </div>
                </section>

                <div id="skills" />
                <section className="row text-center mt-5 mx-5">
                    <h2 className={isLightModeActive ? "mb-4" : "mb-4 text_shadow"}>My Skills</h2>
                    {/* progress bars */}
                    <div className="col-6">
                        <p className="font-weight-bold pt-4 mb-2">HTML</p>
                        <div className="progress bg-black">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "100%" }} aria-valuenow="25" aria-valuemin="0"
                                aria-valuemax="100" />
                        </div>
                        <p className="mt-2">100%</p>
                        <p className="font-weight-bold pt-4 mb-2">CSS</p>
                        <div className="progress bg-black">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "100%" }} aria-valuenow="25" aria-valuemin="0"
                                aria-valuemax="100" />
                        </div>
                        <p className="mt-2">98%</p>
                        <p className="font-weight-bold pt-4 mb-2">SASS</p>
                        <div className="progress bg-black">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "95%" }} aria-valuenow="25" aria-valuemin="0"
                                aria-valuemax="100" />
                        </div>
                        <p className="mt-2">95%</p>
                        <p className="font-weight-bold pt-4 mb-2">JavaScript</p>
                        <div className="progress bg-black">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "95%" }} aria-valuenow="25" aria-valuemin="0"
                                aria-valuemax="100" />
                        </div>
                        <p className="mt-2">95%</p>
                        <p className="font-weight-bold pt-4 mb-2">Bootstrap</p>
                        <div className="progress bg-black">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "98%" }} aria-valuenow="25" aria-valuemin="0"
                                aria-valuemax="100" />
                        </div>
                        <p className="mt-2">98%</p>
                    </div>
                    <div className="col-6">
                        <p className="font-weight-bold pt-4 mb-2">React.js</p>
                        <div className="progress bg-black">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "98%" }} aria-valuenow="25" aria-valuemin="0"
                                aria-valuemax="100" />
                        </div>
                        <p className="mt-2">95%</p>
                        <p className="font-weight-bold pt-4 mb-2">Node.js</p>
                        <div className="progress bg-black">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "95%" }} aria-valuenow="25" aria-valuemin="0"
                                aria-valuemax="100" />
                        </div>
                        <p className="mt-2">95%</p>
                        <p className="font-weight-bold pt-4 mb-2">MongoDB</p>
                        <div className="progress bg-black">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0"
                                aria-valuemax="100" />
                        </div>
                        <p className="mt-2">90%</p>
                        <p className="font-weight-bold pt-4 mb-2">Express.js</p>
                        <div className="progress bg-black">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0"
                                aria-valuemax="100" />
                        </div>
                        <p className="mt-2">90%</p>
                        <p className="font-weight-bold pt-4 mb-2">GitHub</p>
                        <div className="progress bg-black">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "95%" }} aria-valuenow="25" aria-valuemin="0"
                                aria-valuemax="100" />
                        </div>
                        <p className="mt-2">95%</p>
                    </div>
                    <hr className="my-5" />
                </section>

                <div id="projects" />
                <section className="text-center mb-5">
                    <h2 className={isLightModeActive ? "mb-5" : "mb-5 text_shadow"}>My Projects</h2>
                    {/* projects accordion */}
                    <div className="accordion mx-2" id="projectsAccordion">
                        {/* accordion option */}
                        <div className="accordion-item">
                            {/* accordion option closed */}
                            <h2 className="accordion-header" id="headingOne">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#collapseOne"
                                    aria-expanded="false"
                                    aria-controls="collapseOne"
                                >
                                    <h2>Granbury Art</h2>
                                </button>
                            </h2>
                            {/* accordion option open */}
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingOne"
                                data-mdb-parent="#projectsAccordion"
                            >
                                <div className="accordion-body text-dark">
                                    <p>The website for the artists of Granbury, TX.</p>
                                    <strong><p>I was the only developer for this website.</p></strong>
                                    <p className="text-decoration-underline"><a href="https://www.granbury-art.com/">Visit website...</a></p>
                                    <img
                                        className="shadow-2-strong"
                                        src={process.env.PUBLIC_URL + "/img/granbury_art.webp"}
                                        width="75%"
                                        height="75%"
                                        loading="lazy"
                                    >
                                    </img>
                                </div>
                            </div>
                        </div>
                        {/* accordion option */}
                        <div className="accordion-item">
                            {/* accordion option closed */}
                            <h2 className="accordion-header" id="headingTwo">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    <h2>Granbury Fresh</h2>
                                </button>
                            </h2>
                            {/* accordion option open */}
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-mdb-parent="#projectsAccordion"
                            >
                                <div className="accordion-body text-dark">
                                    <p>The purpose of Granbury Fresh is to protect public health, public welfare, the environment,
                                        and the quality of life for the residents in Hood County with a special emphasis on Lake Granbury
                                        and the waters contributing to Lake Granbury.</p>
                                    <strong><p>I was the leading developer for this website.</p></strong>
                                    <p className="text-decoration-underline"><a href="http://www.granburyfresh.org/">Visit website...</a></p>
                                    <img
                                        className="shadow-2-strong"
                                        src={process.env.PUBLIC_URL + "/img/granbury_fresh.webp"}
                                        width="75%"
                                        height="75%"
                                        loading="lazy"
                                    >
                                    </img>
                                </div>
                            </div>
                        </div>
                        {/* accordion option */}
                        <div className="accordion-item">
                            {/* accordion option closed */}
                            <h2 className="accordion-header" id="headingThree">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    <h2>Princigration</h2>
                                </button>
                            </h2>
                            {/* accordion option open */}
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-mdb-parent="#projectsAccordion"
                            >
                                <div className="accordion-body text-dark">
                                    <p>Princigration Landing Page and Blog App</p>
                                    <strong><p>I was the leading developer for this website.</p></strong>
                                    <p className="text-decoration-underline"><a href="https://princigration.herokuapp.com/">Visit website...</a></p>
                                    <img
                                        className="shadow-2-strong"
                                        src={process.env.PUBLIC_URL + "/img/princigration.webp"}
                                        width="75%"
                                        height="75%"
                                        loading="lazy"
                                    >
                                    </img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-5 mx-5" />
                </section>

                <div id="about" />
                <section className="text-center">
                    <h2 className={isLightModeActive ? "mb-5" : "mb-5 text_shadow"}>About Me</h2>
                    <div className="row mx-5">
                        <div className="col-12">
                            <p className="lead">Hello, my name is Jesse Sites and I'm a web developer based in Texas.</p>
                            <p>I'm a Computer Programming student with 3 years of experience in the field of information technology at Tarleton State University.
                                I interned at TIAER (A Tarleton State University research facility) for 2 years, and was a Student Tech for Classroom and Lab Support for 1 year.
                                I now create web application solutions for my clients utilizing my knowledge and strategies gained from Texas State Technical College,
                                my new place of study for Computer Programming.</p>
                            <p className="mb-0">I can create vanilla HTML/CSS/JS websites, React apps, and MERN stack apps.</p>
                        </div>
                        <hr className="my-5" />
                    </div>

                </section>
            </main>

            <footer className={isLightModeActive ? "bg-light text-dark" : "bg-dark text-light"}>
                <div id="contact" />
                <div className="text-center mb-5">
                    <h2 className={isLightModeActive ? "mb-5" : "mb-5 text_shadow"}>Contact Me</h2>
                    <p className="mb-5 mx-auto w-responsive">
                        I can be contacted via LinkedIn, email, text, or call. Since a direct email may be caught in my spam filter,
                        my LinkedIn profile is the best method to contact me quickly. I check my LinkedIn messages daily.
                    </p>
                    {/* contact icons list */}
                    <ul className="list-unstyled mb-0">
                        <li>
                            <i className={isLightModeActive ? "fab fa-linkedin-in fa-2x text-dark" : "fab fa-linkedin-in fa-2x text-light text_shadow"} />
                            <p className="text-decoration-underline">
                                <a href="https://www.linkedin.com/in/jesse-sites/">https://www.linkedin.com/in/jesse-sites/</a>
                            </p>
                        </li>
                        <li>
                            <i className={isLightModeActive ? "fas fa-envelope fa-2x text-dark" : "fas fa-envelope fa-2x text-light text_shadow"} />
                            <p>jesse318s@gmail.com</p>
                        </li>
                        <li>
                            <i className={isLightModeActive ? "fas fa-phone fa-2x text-dark" : "fas fa-phone fa-2x text-light text_shadow"} />
                            <p>+1 325-455-4644</p>
                        </li>
                    </ul>
                </div>
                <div className="bg-black bg-gradient text-center text-light p-3">
                    © 2021 Copyright: Jesse Sites
                </div>
            </footer>
        </>
    );
}

export default App;