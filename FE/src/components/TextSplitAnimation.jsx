import React from "react";
import { motion } from "framer-motion";
import { SplitText } from "./SplitText";

export const TextSplitAnimation = ({ text, duration }) => {

    const textChars = SplitText(text);

    const charVariants = {
        hidden: { opacity: 0 },
        reveal: { opacity: 1 }
    }

  return (
    <motion.div initial="hidden" animate="reveal" transition={{ staggerChildren: 0.015 }}>
      {textChars.map((char, index) => (
        <motion.span
          key={index} 
          variants={charVariants} 
          transition={{ duration: duration }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

