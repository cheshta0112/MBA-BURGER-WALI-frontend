import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/founder.jpg";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={400} width={300} />
        <h3>Cheshta Pal</h3>

        <p>
          Hey, Everyone I am Cheshta Pal, the founder of MBA Burger Wali.
          <br />
          Our aim is to create the most tasty burger on planet.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
