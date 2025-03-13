import { motion } from "framer-motion";
import { skills } from "../../data";
import "../../styles/components/skills.scss";

const Skills = () => (
  <section className="section skills">
    <h2 className="section__title">Technical Skills</h2>

    <div className="skills__container">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="skill__item"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="skill__header">
            <span className="skill__name">{skill.name}</span>
            <span className="skill__level">{skill.level}%</span>
          </div>
          <div className="skill__bar">
            <motion.div
              className="skill__progress"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
