import React from "react";

export default function Home() {
    return (
        <section class="home" id="home">
            <div class="home-content">
                <h3>Hello, my name is</h3>
                <h1>Mohammed Bhimjee</h1>
                <h3>And I'm a <span>Tech/Dev Support</span></h3>
                <p>My unique perspective allows me to unlock your full potential.</p>
                <div class="social">
                    <a href="#https://www.linkedin.com/in/mohammed-bhimjee/"><i class="bx bxl-linkedin"></i></a>
                    <a href="#https://www.github.com/Chartok"><i class="bx bxl-github"></i></a>
                </div>
                <a href="https://docs.google.com/document/d/1EpnJK-pETelC5HLPk_zqbBhiI6fM-cwcj4eyjQ2TnUg/edit?usp=sharing"
                    class="btn">CV</a>
            </div>
            <div class="home-img">
                <img src="images/selfie.png" alt="mohammed bhimjee" />
            </div>
        </section>

    );
}