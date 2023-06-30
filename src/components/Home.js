import React from "react";
import Header from "./components/Header";

export default function Home() {
    return (
        <>
            <Header />
            <section class="home" id="home">
                <div class="home-content">
                    <h1>Hi, I am <span>Mohammed Bhimjee</span></h1>
                    <h3>Tech/Dev Support</h3>
                    <p>With a foundation of a variety of experiences, the possibilities of what we can achieve is endless...
                    </p>
                    <a href="#contact" class="btn">Contact Me</a>
                </div>
            </section>
        </>
    );
}