
import { motion } from 'framer-motion';

function Projects() {
    const projects = [
        {
            title: 'ConnecTS',
            desc: 'Full-stack MERN application featuring real-time communication between teachers and students. Implemented WebSocket connections, video calling, advanced filtering, and responsive design.',
            tags: 'React • Node.js • MongoDB • Socket.io • WebRTC'
        },
        {
            title: 'TAC Generator',
            desc: 'Custom compiler for Urdu-like programming language with lexical analysis, syntax parsing, and three-address code generation. Built with modern compiler design principles.',
            tags: 'C++ • Compiler Design • Lexical Analysis • Code Generation'
        },
        {
            title: 'Employee Management System',
            desc: 'Comprehensive HR platform with attendance tracking, leave management, employee profiles, and administrative dashboards. Features role-based access control.',
            tags: 'MERN Stack • JWT Authentication • Chart.js • Material-UI'
        },
        {
            title: 'Crickbook',
            desc: 'Cricket statistics and analytics platform with player performance tracking, match analysis, and interactive dashboards built with modern web technologies.',
            tags: 'ASP.NET Core • MySQL • Bootstrap • Chart.js'
        },
        {
            title: 'DevXhyp',
            desc: 'Professional web development agency website featuring modern UI/UX design, responsive layouts, and optimized performance for client showcase.',
            tags: 'HTML5 • CSS3 • JavaScript • GSAP Animations'
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="projects" id="projects" style={{textAlign: 'center'}}>
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                FEATURED PROJECTS
            </motion.h2>
            
            <motion.div 
                className="project-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {projects.map((proj, idx) => (
                    <motion.div
                        className="project-card"
                        key={idx}
                        variants={itemVariants}
                        whileHover={{ 
                            scale: 1.03,
                            transition: { duration: 0.2 }
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3>{proj.title}</h3>
                        <p>{proj.desc}</p>
                        <p className="project-tags">{proj.tags}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default Projects;
