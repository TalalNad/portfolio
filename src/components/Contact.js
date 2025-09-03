
import { motion } from 'framer-motion';

function Contact() {
    return (
        <section className="contact" id="contact">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                LET'S CONNECT
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <p>
                    Ready to bring your next project to life? I'm always excited to collaborate on innovative solutions
                    and challenging projects. Whether you're looking for frontend development, DevOps implementation,
                    or technical consultation, let's discuss how we can work together.
                </p>
                <br />
                {/* heh */}
                <p>
                    Drop me a line at{' '}
                    <a href="mailto:talalnadeem.7.tn@gmail.com">talalnadeem.7.tn@gmail.com</a>
                </p>
                <p style={{ marginTop: '20px', fontSize: '1rem', color: '#999' }}>
                    Available for freelance projects and full-time opportunities
                </p>
            </motion.div>
        </section>
    );
}

export default Contact;
