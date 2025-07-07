import { motion } from 'framer-motion';

function Contact() {
    return (
        <section className="contact" id="contact">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                CONTACT ME
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Reach out via email at{' '}
                <a href="mailto:talal.nadeem@systems.ltd">talal.nadeem@systems.ltd</a>
            </motion.p>
        </section>
    );
}

export default Contact;
