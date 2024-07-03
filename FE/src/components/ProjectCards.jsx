import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
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
    <div className="opacity-0 z-05 pb-6 mt-8" id="projects">
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{
        clickable: true,
        // dynamicBullets: true,
      }}
      navigation={true}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="mySwiper z-0"
    >
      {works.map((work, index) => (
        <SwiperSlide key={index}>
            <div className="app__work-item app__flex">
              <div
                className="app__work-img app__flex"
                style={{ position: "relative" }}
              >
                <img src={urlFor(work.imgUrl)} alt={work.name} />
                <motion.div
                  initial={{ opacity: 0 }}
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
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};
