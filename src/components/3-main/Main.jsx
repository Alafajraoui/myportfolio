import { useState } from "react";
import "./main.css";
import { MyProjects } from "./MyProjects";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import VideoModal from "./VideoModal"; 

const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [filtered, setFiltered] = useState(MyProjects);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [selectedVideo, setSelectedVideo] = useState(null);

  const toggleDescription = (index) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleVideoClick = (videoLink) => {
    setSelectedVideo(videoLink);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <main className="flex" id="projects">
      <section className="flex left-section">
        <button
          onClick={() => {
            setCurrentActive("all");
            setFiltered(MyProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            setCurrentActive("css");
            const newArr = MyProjects.filter(
              (item) => item.category === "HTML & JS & CSS"
            );
            setFiltered(newArr);
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML , JS & CSS
        </button>
        <button
          onClick={() => {
            setCurrentActive("react");
            const newArr3 = MyProjects.filter(
              (item) => item.category === "React & React Native"
            );
            setFiltered(newArr3);
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React & React Native
        </button>
        <button
          onClick={() => {
            setCurrentActive("Next Js");
            const newArr4 = MyProjects.filter(
              (item) => item.category === "Next Js"
            );
            setFiltered(newArr4);
          }}
          className={currentActive === "node" ? "active" : null}
        >
          Next Js
        </button>
      </section>

      <section className="flex right-section">
        <AnimatePresence>
          {filtered.map((item, index) => {
            const isExpanded = expandedDescriptions[index];
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 30 }}
                key={index}
                className="card"
              >
                <img width={266} src={item.image} alt="" />

                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.title}</h1>
                  <p className="sub-title">
                    {isExpanded
                      ? item.descripton
                      : `${item.descripton.slice(0, 100)}...`}
                  </p>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <a
                        href={item.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-github"
                      >
                        {/* GitHub Icon here */}
                      </a>
                      {item.videoLink && (
                        <button
                          className="icon-video"
                          onClick={() => handleVideoClick(item.videoLink)}
                        >
                          <FontAwesomeIcon icon={faVideo} />
                        </button>
                      )}
                    </div>

                    <button
                      className="link flex"
                      onClick={() => toggleDescription(index)}
                    >
                      {isExpanded ? "Show Less" : "Show More"}
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>

      {selectedVideo && (
        <VideoModal
          videoLink={selectedVideo}
          onClose={closeVideoModal}
        />
      )}
    </main>
  );
};

export default Main;
