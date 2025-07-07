import { motion } from 'framer-motion';

function Hero() {
    return (
        <section className="hero" id="home">
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Mahdi Jaffri

            </motion.h1>
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
            >
                FRONTEND DEVELOPER & DEVOPS ENGINEER
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4 }}
            >
                Crafting interactive experiences, combining design with scalable systems.
            </motion.p>

            <div className="cta-buttons">
                <a href="#projects">🚀 View Projects</a>
                <a href="#contact">📬 Contact Me</a>
            </div>
        </section>
    );
}

export default Hero;
