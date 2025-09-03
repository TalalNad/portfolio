import React from "react";
import Tilt from "react-parallax-tilt";

const Projects = () => {
    const projects = [
        { title: "Crickbook", desc: "Book cricket fields online with ease." },
        { title: "ConnecTS", desc: "Teacher-student platform with chat & video." },
        { title: "DevXhyp", desc: "Futuristic portfolio with animations." },
    ];

    return (
        <section className="projects" id="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((proj, i) => (
                    <Tilt glareEnable={true} glareMaxOpacity={0.4} scale={1.05} key={`project-${i}-${proj.title}`}>
                        <div className="project-card">
                            <h3>{proj.title}</h3>
                            <p>{proj.desc}</p>
                        </div>
                    </Tilt>
                ))}
            </div>
        </section>
    );
};

export default Projects;
