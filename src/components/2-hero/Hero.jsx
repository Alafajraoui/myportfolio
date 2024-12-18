import "./hero.css";
import DevAnimation from "../../../src/animations/developer.json";
import Lottie from "lottie-react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"; 

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section id="about" className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ damping: 5, type: "spring", stiffness: 100 }}
            src="./me-modified.png"
            className="avatar"
            alt="Profile Avatar"
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Full-Stack Developer | React, Next.js & Node.js Specialist
        </motion.h1>
        <p className="sub-title">
          I’m Ala Fajraoui, A dedicated Full Stack Web Developer with a strong
          background in Agile project management, delivering high-quality
          software through strategic problem-solving and continuous improvement.
          Committed to consistently enhancing both my technical expertise and
          the overall success of projects.
        </p>

        <div className="all-icons flex">
          <a
            href="https://github.com/Alafajraoui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-github"></div>
          </a>

          <a
            href="https://www.linkedin.com/in/ala-fajraoui-663218324/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-linkedin"></div>
          </a>

          
          <a
            href="https://www.freelances.tn/freelance/ala-fajraoui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-freelance">
              <FontAwesomeIcon icon={faBriefcase} size="1x" />
            </div>
          </a>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie
          className=""
          lottieRef={lottieRef}
          onLoadedImages={() => {
            // @ts-ignore
            lottieRef.current.setSpeed(0.5);
          }}
          style={{ height: 355 }}
          animationData={DevAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
