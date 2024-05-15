import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { urlFor, client } from "../../client";

import "./ProjectCards.scss";

export const ProjectCards = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"]';
    client.fetch(query).then((data) => {
      setWorks(data);
    });
  }, []);


  return (
    <div className="app__work-portfolio opacity-0 z-05 pb-6" id="projects">
      {works.map((work, index) => (
        <div className="app__work-item app__flex" key={index}>
          <div
            className="app__work-img app__flex"
            style={{ position: "relative" }}
          >
            <img src={urlFor(work.imgUrl)} alt={work.name} />
            <motion.div
              initial={{ opacity: 0 }} // Ensure the initial state is set
              whileHover={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              className="app__work-hover app__flex"
            >
              <a href={work.projectLink} target="_blank" rel="noreferrer">
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillEye />
                </motion.div>
              </a>
              <a href={work.codeLink} target="_blank" rel="noreferrer">
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillGithub />
                </motion.div>
              </a>
            </motion.div>
          </div>
          <div className="app__work-content app__flex">
            <h4 className="bold-text">{work.title}</h4>
            <p className="p-text" style={{ marginTop: 10 }}>
              {work.description}
            </p>
            {work.tags && (
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags.join(", ")}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
