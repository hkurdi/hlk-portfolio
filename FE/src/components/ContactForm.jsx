import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import axios from "axios";

import { HLKButton } from "./HLKButton";
import { showSuccessAlert, showErrorAlert } from "./ContactAlerts";

import "../pages/responsive/ContactPage.css";

export const ContactForm = () => {
  const api = axios.create({
    baseURL: "http://localhost:3001",
  });

  const regex = /^[\w\.-]+@[\w\.-]+\.\w+$/;
  

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("feel").classList.add("animate-pulse");
    }, 8100);
  }, []);

  const contactRef = useRef(null);
  const isInView = useInView(contactRef, { margin: "-100px" });

  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      user_name: e.target.user_name.value,
      user_email: e.target.user_email.value,
      message: e.target.message.value,
    };
    if (
      !regex.test(formData.user_email.toLowerCase()) ||
      formData.message === "" ||
      formData.user_name === ""
    ) {
      showErrorAlert(
        "Please ensure all fields are correctly filled and the email is valid."
      );
    } else {
      api
        .post("/sendmail", formData)
        .then((response) => {
          console.log("Email successfully sent:", response.data);
          showSuccessAlert();
          e.target.reset();
        })
        .catch((error) => {
          console.error("Failed to send email:", error);
          showErrorAlert();
          e.target.reset();
        });
    }
  };

  return (
    <>
      <motion.div
        ref={contactRef}
        className="phoneSVG"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        transition={{ delay: 7, duration: 1 }}
      >
        <svg
          fill="#000000"
          width="400px"
          height="400px"
          viewBox="0 0 64 64"
          version="1.1"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          className="ml-24 mt-9 glow"
          id="msg"
        >
          <g id="_x32_5_attachment" />

          <g id="_x32_4_office" />

          <g id="_x32_3_pin" />

          <g id="_x32_2_business_card" />

          <g id="_x32_1_form" />

          <g id="_x32_0_headset" />

          <g id="_x31_9_video_call" />

          <g id="_x31_8_letter_box" />

          <g id="_x31_7_papperplane" />

          <g id="_x31_6_laptop" />

          <g id="_x31_5_connection" />

          <g id="_x31_4_phonebook" />

          <g id="_x31_3_classic_telephone" />

          <g id="_x31_2_sending_mail" />

          <g id="_x31_1_man_talking" />

          <g id="_x31_0_date" />

          <g id="_x30_9_review" />

          <g id="_x30_8_email" />

          <g id="_x30_7_information" />

          <g id="_x30_6_phone_talking" />

          <g id="_x30_5_women_talking" />

          <g id="_x30_4_calling" />

          <g id="_x30_3_women" />

          <g id="_x30_2_writing" />

          <g id="_x30_1_chatting">
            <g>
              <g>
                <motion.path
                  strokeWidth={0.2}
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={
                    isInView && {
                      pathLength: 1,
                    }
                  }
                  transition={{ duration: 8 }}
                  d="M38.0728,40.9023c-0.5522,0-1.0259-0.4478-1.0259-1s0.4219-1,0.9741-1h0.0518c0.5522,0,1,0.4478,1,1     S38.625,40.9023,38.0728,40.9023z"
                />
              </g>

              <g>
                <motion.path
                  strokeWidth={0.2}
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={
                    isInView && {
                      pathLength: 1,
                    }
                  }
                  transition={{ duration: 18 }}
                  d="M45.3604,40.9023c-0.5522,0-1.0273-0.4478-1.0273-1s0.4199-1,0.9722-1h0.0552c0.5522,0,1,0.4478,1,1     S45.9126,40.9023,45.3604,40.9023z"
                />
              </g>

              <g>
                <motion.path
                  strokeWidth={0.2}
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={
                    isInView && {
                      pathLength: 1,
                    }
                  }
                  transition={{ duration: 18 }}
                  d="M52.6445,40.9023c-0.5522,0-1.0273-0.4478-1.0273-1s0.4199-1,0.9722-1h0.0552c0.5522,0,1,0.4478,1,1     S53.1968,40.9023,52.6445,40.9023z"
                />
              </g>

              <g>
                <motion.path
                  strokeWidth={0.2}
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={
                    isInView && {
                      pathLength: 1,
                    }
                  }
                  transition={{ duration: 18 }}
                  d="M12.584,25.186c-0.5522,0-1.0293-0.4478-1.0293-1s0.418-1,0.9702-1h0.0591c0.5522,0,1,0.4478,1,1     S13.1362,25.186,12.584,25.186z"
                />
              </g>

              <g>
                <motion.path
                  strokeWidth={0.2}
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={
                    isInView && {
                      pathLength: 1,
                    }
                  }
                  transition={{ duration: 18 }}
                  d="M20.7529,25.186c-0.5522,0-1.0293-0.4478-1.0293-1s0.4185-1,0.9707-1h0.0586c0.5522,0,1,0.4478,1,1     S21.3052,25.186,20.7529,25.186z"
                />
              </g>

              <g>
                <motion.path
                  strokeWidth={0.2}
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={
                    isInView && {
                      pathLength: 1,
                    }
                  }
                  transition={{ duration: 18 }}
                  d="M28.9219,25.186c-0.5522,0-1.0293-0.4478-1.0293-1s0.4185-1,0.9707-1h0.0586c0.5522,0,1,0.4478,1,1     S29.4741,25.186,28.9219,25.186z"
                />
              </g>

              <motion.path
                strokeWidth={0.2}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 18 }}
                d="M56.5327,26.0718h-0.0005c-3.6577-3.0059-8.2656-4.4053-12.9771-3.9463c-1.0573,0.1035-2.0867,0.3111-3.0887,0.5919    c-0.2051-3.1539-1.169-6.2225-2.8205-8.9474c-2.7339-4.5127-7.0605-7.6904-12.1841-8.9478    c-5.1226-1.2573-10.4302-0.4434-14.9414,2.2905c-9.3149,5.6431-12.3022,17.812-6.6592,27.1274    c0.4487,0.7378,0.9443,1.4468,1.4785,2.1147l-2.1206,6.457c-0.1152,0.3521-0.0269,0.7388,0.23,1.0059    c0.1914,0.1982,0.4526,0.3062,0.7202,0.3062c0.0923,0,0.1851-0.0127,0.2764-0.0391l7.8203-2.2476    c4.9188,2.3405,10.487,2.549,15.5263,0.6185c0.6382,4.1645,2.7308,8.1203,6.233,10.9997    c4.626,3.8027,10.7549,5.0024,16.4702,3.2461l6.5781,2.9609c0.1313,0.0591,0.2715,0.0879,0.4106,0.0879    c0.2183,0,0.4351-0.0718,0.6138-0.2104c0.2925-0.2275,0.4351-0.5977,0.3711-0.9624l-1.0391-5.9121    c0.5459-0.5166,1.062-1.0698,1.5391-1.6499C65.1724,43.4663,64.0791,32.2764,56.5327,26.0718z M12.8066,39.8755    c-0.2241-0.1113-0.4814-0.1353-0.7236-0.0664l-6.374,1.832l1.7026-5.1851c0.1084-0.3306,0.0376-0.6938-0.1875-0.959    c-0.604-0.7119-1.1606-1.4844-1.6528-2.2944C0.5,24.8315,3.1851,13.895,11.5571,8.8232c4.0537-2.458,8.8218-3.1885,13.4282-2.0591    c4.6045,1.1304,8.4932,3.9863,10.9502,8.0425c1.5782,2.6036,2.4474,5.5574,2.5516,8.5797    c-2.6577,1.0986-5.0207,2.841-6.8978,5.1259c-2.8444,3.4614-4.1367,7.6871-3.9944,11.8476    C22.8245,42.3625,17.4745,42.2095,12.8066,39.8755z M57.4243,49.7456c-0.5303,0.645-1.1147,1.2524-1.7378,1.8062    c-0.2598,0.2305-0.3809,0.5791-0.3208,0.9209l0.8066,4.5908l-5.2051-2.3433c-0.1304-0.0586-0.2705-0.0879-0.4106-0.0879    c-0.106,0-0.2124,0.0166-0.3145,0.0508c-5.1646,1.7104-10.7529,0.6758-14.9463-2.7725    c-6.6953-5.5044-7.6646-15.4312-2.1616-22.1289c2.666-3.2446,6.436-5.2568,10.6157-5.6655    c4.1816-0.4072,8.2681,0.8345,11.5127,3.5005h-0.0005C61.957,33.1211,62.9268,43.0483,57.4243,49.7456z"
              />
            </g>
          </g>
        </svg>
      </motion.div>
      <motion.p
        id="feel"
        className="select-none mb-5 text-sm font-light text-gray-300 text-pretty "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
      >
        {" "}
        Feel free to reach out with any opportunities or ideas you have in mind.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 8, duration: 1 }}
        className="select-none mb-4 -mt-5 text-sm font-light text-gray-100 text-pretty ml-46"
      >
        {" "}
        I'm eager to work on projects and bring creative solutions to life
        together.{" "}
      </motion.p>
      <motion.form
        className="form"
        ref={formRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 8, duration: 1 }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          required
          placeholder="Name"
          className="z-1"
          name="user_name"
        />
        <input
          type="email"
          required
          placeholder="Email"
          className="z-1"
          name="user_email"
        />
        <textarea
          type="text"
          rows={8}
          placeholder="Inquiry"
          className="z-1"
          name="message"
          required
        />
        <HLKButton text={"Submit"} />
      </motion.form>
    </>
  );
};
