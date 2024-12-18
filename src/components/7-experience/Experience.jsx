import React, { useState } from "react";
import "./experience.css";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Design office (Industrial designer)",
    company: "Sobeca",
    date: "01 April 2019 - 30 June 2019",
    description: "SOBECA is a company specializing in manufacturing all types of gears. My main mission was to study and model different types of gears (straight, helical, conical, rack and pinion, chain sprocket, and worm screw) as well as mechanical spare parts for industrial maintenance.",
    img: "../../../sobeca.jpg",
  },
  {
    id: 2,
    title: "Design office (Industrial designer)",
    company: "Company of Gafsa Phosphates",
    date: "06 June 2020 - 11 Mars 2020",
    description: "The Gafsa Phosphate Company or CPG is a Tunisian company operating phosphates but like a designer industrial my position is located in the office study where I will study and model everything that is metal parts",
    img: "../../../Compagnie_des_phosphates_de_Gafsa.jpg",
  },
  {
    id: 3,
    title: "Design office (Mold designer for plastic products )",
    company: "HPC Groupe (Precimold)",
    date: "16 September 2021 - 20 November 2021",
    description: "HPC-Group, a leader in plastics processing with thirty years of expertise, relies on my role as an industrial designer to create innovative mold designs. I develop efficient, high-quality molds that align with client needs and integrate seamlessly with manufacturing processes, driving product excellence across Tunisia and Africa.",
    img: "../../../hpc.png",
    
  },
  {
    id: 4,
    title: "participant in the international plastic exhibition",
    company: "expo",
    date: "30 November 2021 - 03 December 2021",
    description: "Participated in the international plastic exhibition as an industrial designer, where I presented and discussed advanced mold designs and innovations in plastics processing.",
    img: "../../../expo.jpg",
  },
  {
    id: 5,
    title: "Design office (Mold designer for plastic products)",
    company: "EBECA",
    date: "07 February 2022 - 23 April 2022",
    description: "EBECA is a company specializing in manufacturing all types of molds. My main mission was to study and model different types of molds of different plastic parts. ",
    img: "../../../ebeca.webp",
  },

];

const ProfessionalExperience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  // Function to handle modal open/close
  const openModal = (exp) => {
    setSelectedExperience(exp);
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };

  return (
    <section id="experience"  className="experience-section flex">
      <h2 className="section-title">Other Experiences</h2>
      <div className="experience-grid">
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            className="experience-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => openModal(exp)}
          >
            <img src={exp.img} alt={exp.company} className="experience-image" />
            <div className="experience-info">
              <h3 className="experience-title">{exp.title}</h3>
              <p className="experience-company">{exp.company}</p>
              <p className="experience-date">{exp.date}</p>
              <p className="experience-description">
                {/* Show only a part of the description */}
                {exp.description.substring(0, 50)}...
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for showing full details */}
      {selectedExperience && (
        <div className="modal-backdrop" onClick={closeModal}>
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Show Image in Modal */}
            <img
              src={selectedExperience.img}
              alt={selectedExperience.company}
              className="modal-image"
            />
            <h3 className="modal-title">{selectedExperience.title}</h3>
            <p className="modal-company">{selectedExperience.company}</p>
            <p className="modal-date">{selectedExperience.date}</p>
            <p className="modal-description">{selectedExperience.description}</p>
            <button className="modal-close" onClick={closeModal}>
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default ProfessionalExperience;
