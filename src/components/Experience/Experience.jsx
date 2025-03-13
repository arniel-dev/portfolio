import { motion } from "framer-motion";
import "../../styles/components/experience.scss";
import { experiences } from "../../data.js";

const Experience = () => (
  <section className="section experience">
    <h2 className="section__title">Experience</h2>

    <div className="experience__grid">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          className="experience__card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h3>{exp.title}</h3>
          <p className="experience__company">{exp.company}</p>
          <p className="experience__duration">{exp.duration}</p>
          <ul className="experience__list">
            {exp.responsibilities.map((item, i) => (
              <li key={i} className="experience__item">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experience;
