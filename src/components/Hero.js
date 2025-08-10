
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
            </motion.div>

            <motion.div 
                className="profile-section"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
            >
                <motion.img
                    src="/attached_assets/702A7D00-E92C-481A-AAA6-6532A8828D22 2_1754869046948.JPEG"
                    alt="Talal Nadeem - Frontend Developer & DevOps Engineer"
                    className="profile-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.3 }
                    }}
                />
                <motion.div 
                    className="profile-content"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <p>
                        Passionate about crafting exceptional digital experiences through innovative frontend solutions and robust DevOps practices. I transform ideas into scalable, user-centric applications that drive business growth and deliver outstanding user experiences.
                    </p>
                </motion.div>
            </motion.div>

            <motion.div 
                className="cta-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
            >
                <a href="#projects">🚀 View Projects</a>
                <a href="#contact">📬 Contact Me</a>
                <a href="#about">👨‍💻 About Me</a>
            </motion.div>
        </section>
    );
}

export default Hero;
