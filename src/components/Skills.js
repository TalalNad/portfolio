
import { motion } from 'framer-motion';

function Skills() {
    const skillCategories = [
        {
            title: 'Frontend Development',
            skills: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'SCSS', 'Framer Motion']
        },
        {
            title: 'Backend & Database',
            skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'GraphQL']
        },
        {
            title: 'DevOps & Cloud',
            skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Terraform', 'Linux']
        },
        {
            title: 'Tools & Technologies',
            skills: ['Git', 'Webpack', 'Vite', 'Jest', 'Cypress', 'Figma', 'Postman']
        }
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
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="skills" id="skills" style={{textAlign: 'center'}}>
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                TECHNICAL SKILLS
            </motion.h2>
            
            <motion.div 
                className="skills-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {skillCategories.map((category, idx) => (
                    <motion.div
                        className="skill-category"
                        key={`category-${idx}-${category.title}`}
                        variants={itemVariants}
                        whileHover={{ 
                            scale: 1.02,
                            transition: { duration: 0.2 }
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3>{category.title}</h3>
                        <div className="skill-list">
                            {category.skills.map((skill, skillIdx) => (
                                <span key={`skill-${idx}-${skillIdx}-${skill}`} className="skill-tag">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default Skills;
