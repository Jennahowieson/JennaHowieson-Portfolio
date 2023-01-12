import React from "react";

function Projects() {
    return (
        <>
            <h2>My Projects</h2>
            <section id="project-grid">
                <section class='project-box'>
                    <h3>Wheelie Wild Campervans</h3>
                    <p>Personal one week project to create a CRUD app using Flask, Python, SQL, Html & Css to help Wheelie Wild Campers manage the rental of their fleet of campervans to different users / renters.</p>
                    <a href="https://github.com/Jennahowieson/Wheelie-Wild-Campervans/blob/main/README.md" target="_blank" rel="noopener noreferrer"><i class="devicon-github-original-wordmark"></i></a>
                </section>
                <section class='project-box'>
                    <h3>Disney Character Finder</h3>
                    <p> Personal weekend project, building a Disney Character Finder using a 3rd party API to randomly generate a character based on the number entered by the user. </p>
                    <a href="https://github.com/Jennahowieson/Disney-React-App/blob/main/README.md" target="_blank" rel="noopener noreferrer"><i class="devicon-github-original-wordmark"></i></a>
                </section>
                <section class='project-box'>
                    <h3>Element_Ables</h3>
                    <p> Group project creating an educational app. It should use the MERN stack of MonogoDB, Express, React and Node (JavaScript).</p>
                    <a href="https://github.com/bsmith/element_able/blob/main/README.md" target="_blank" rel="noopener noreferrer"><i class="devicon-github-original-wordmark"></i></a>
                </section>
            </section>
        </>
    )
}
export default Projects;