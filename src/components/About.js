
import { motion } from 'framer-motion';

function About() {
    return (
        <section className="about" id="about" style={{textAlign: 'center'}}>
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                ABOUT ME
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                I'm a passionate Frontend Developer and DevOps Engineer with a keen eye for creating seamless user experiences. 
                My expertise spans modern web technologies, cloud infrastructure, and automation tools. I thrive on turning 
                complex problems into elegant, scalable solutions that drive business growth and user satisfaction.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <ul className="about-tags">
                    <motion.li key="frontend" whileHover={{ scale: 1.05 }}>
                        <strong>🧠 Frontend Engineering</strong>
                        <br />React, Vue, Angular, TypeScript
                    </motion.li>
                    <motion.li key="devops" whileHover={{ scale: 1.05 }}>
                        <strong>⚙️ DevOps & Cloud</strong>
                        <br />AWS, Docker, Kubernetes, CI/CD
                    </motion.li>
                    <motion.li key="design" whileHover={{ scale: 1.05 }}>
                        <strong>🎨 UI/UX Design</strong>
                        <br />Design Systems, Figma, Animation
                    </motion.li>
                    <motion.li key="mobile" whileHover={{ scale: 1.05 }}>
                        <strong>📱 Mobile-First</strong>
                        <br />Responsive Design, PWA, Performance
                    </motion.li>
                </ul>
            </motion.div>
        </section>
    );
}

export default About;
