import React from "react";
import Welcome from "../Contents/Welcome";
import Article from "../Contents/Article";
import About from "../Contents/About";
import Contact from "../Contents/Contact";
const Main = () => {
    return (
        <main className="landing-page__content-main">
            <Welcome />
            <Article/>
            <About />
            <Contact />
        </main>
    )
}
export default Main