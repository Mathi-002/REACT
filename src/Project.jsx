
import React from 'react';
import '../src/Project.css'

const Projects = () => {
    return (
        <section id="projects">
            <h2> &#9755; Projects</h2>
            <div className="project-grid">
                <div className="project-item">
                    <h3>Project 1</h3>
                    <p>A web app built with React.</p>
                </div>
                <div className="project-item">
                    <h3>Project 2</h3>
                    <p>A responsive website built with HTML, CSS, and JavaScript.</p>
                </div>
            </div>
        </section>
    );
}

export default Projects;