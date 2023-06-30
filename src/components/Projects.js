import React from "react";

export default function Projects() {
    return (
        <section class="container-fluid bg-secondary" id="portfolio">
            <h2 class="heading text-center">Latest <span>Projects</span></h2>

            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div class="card">
                        <img src="images/prjct2.png" class="card-img-top" alt="project 1 " />
                        <div class="card-body">
                            <h4 class="card-title">GamerLi</h4>
                            <p class="card-text">A simple library dashboard to manage games. This was a collaboration project I worked with a group to produce an MVP. In this project our group combined what we learned (Node.js/Express, MySQL, Sessions, Handlebars, Bootstrap, and JavaScript)
                            </p>
                            <a href="https://gamerli.herokuapp.com/" class="btn btn-primary"><i
                                class="bx bx-link-external"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div class="card">
                        <img src="images/city_skyilne.jpg" class="card-img-top" alt="project 2" />
                        <div class="card-body">
                            <h4 class="card-title">Survey</h4>
                            <p class="card-text">One of my earliest projects prior to joining a coding bootcamp. Hightlighting what I learned as a beginner about HTML and CSS.</p>
                            <a href="https://chartok.github.io/code-survey/" class="btn btn-primary"><i
                                class="bx bx-link-external"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div class="card">
                        <img src="images/jott-preview.jpg" class="card-img-top" alt="project 3" />
                        <div class="card-body">
                            <h4 class="card-title">JottItNow</h4>
                            <p class="card-text">A note taking app deployed on heroku. This is the backend assignment for bootcamp I am proud of completing. Here my task was to simply write up the backend that enables the the application to appropriately write, save, update, and delete notes for users. However, to achieve this I had to refactor most of the code base. Strictly to maintain readibility, efficiency, and maintainability.</p>
                            <a href="https://jottitnow.herokuapp.com/" class="btn btn-primary"><i
                                class="bx bx-link-external"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
