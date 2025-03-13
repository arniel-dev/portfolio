import { motion } from "framer-motion";
import "../../styles/components/contact.scss";

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <motion.div
        className="contact__content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section__title">Get in Touch</h2>

        <div className="contact__container">
          <div className="contact__info">
            <p className="contact__text">
              Have a question or want to work together? Feel free to reach out!
            </p>
            <div className="contact__details">
              <a href="tel:+639959026144" className="contact__link">
                📞 +63 995 902 6144
              </a>
              <a
                href="mailto:canilloarnielz@gmail.com"
                className="contact__link"
              >
                ✉️ canilloarnielz@gmail.com
              </a>
            </div>
          </div>

          <form className="contact__form">
            <motion.div
              className="form__group"
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
            >
              <input
                type="text"
                placeholder="Name"
                className="form__input"
                required
              />
            </motion.div>

            <motion.div
              className="form__group"
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
            >
              <input
                type="email"
                placeholder="Email"
                className="form__input"
                required
              />
            </motion.div>

            <motion.div
              className="form__group"
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
            >
              <textarea
                placeholder="Message"
                className="form__textarea"
                required
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="form__button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
