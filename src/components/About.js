import { motion } from 'framer-motion';

function About() {
    return (
        <section className="about" id="about">
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                ABOUT ME
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                I develop web and mobile frontends with an eye for sleek UI, UX and animation. I also work with DevOps tools and cloud services to automate & deploy robust applications.
            </motion.p>

            <ul className="about-tags">
                <li>🧠 UI Engineering</li>
                <li>⚙️ DevOps & Pipelines</li>
                <li>🎨 Design Systems</li>
                <li>📱 Responsive & Mobile-first</li>
            </ul>
        </section>
    );
}

export default About;
