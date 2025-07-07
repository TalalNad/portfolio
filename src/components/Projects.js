import { motion } from 'framer-motion';

function Projects() {
    const projects = [
        {
            title: 'ConnecTS',
            desc: 'MERN-based teacher-student platform with live chat, video calls & filters.',
        },
        {
            title: 'TAC Generator',
            desc: 'Urdu-like language compiler that produces three-address code.',
        },
        {
            title: 'Employee Management System',
            desc: 'Attendance marking & request portal using MERN.',
        },
        {
            title: 'Crickbook',
            desc: 'Cricket stat app using ASP.NET and MySQL.',
        },
        {
            title: 'DevXhyp',
            desc: 'Static website to convert ideas into real-world usable UIs.',
        },
    ];

    return (
        <section className="projects" id="projects">
            <h2>PROJECTS</h2>
            <div className="project-grid">
                {projects.map((proj, idx) => (
                    <motion.div
                        className="project-card"
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                    >
                        <h3>{proj.title}</h3>
                        <p>{proj.desc}</p>
                        <p>{proj.desc}</p>
                        <p className="project-tags">React • Node • MongoDB</p>

                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
