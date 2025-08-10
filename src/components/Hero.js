
import { motion } from 'framer-motion';

function Hero() {
    return (
        <section className="hero" id="home">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    TALAL NADEEM
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    FRONTEND DEVELOPER & DEVOPS ENGINEER
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    Passionate about crafting exceptional digital experiences through innovative frontend solutions and robust DevOps practices. I transform ideas into scalable, user-centric applications.
                </motion.p>
            </motion.div>

            <motion.div 
                className="cta-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                <a href="#projects">🚀 View Projects</a>
                <a href="#contact">📬 Contact Me</a>
                <a href="#about">👨‍💻 About Me</a>
            </motion.div>
        </section>
    );
}

export default Hero;
