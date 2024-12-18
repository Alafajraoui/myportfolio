import React, { useState } from "react";
import "./certification.css";
import { motion, AnimatePresence } from "framer-motion";

const certifications = [
  {
    id: 1,
    title: "Full Stack JavaScript Developer",
    provider: "RBK",
    date: "August 2024",
    img: "../../../rbk.jpg",
  },
  {
    id: 2,
    title: "Microsoft Office Specialist Excel 2013",
    provider: "Microsoft",
    date: "December 2019",
    img: "../../../excel 2013.jpg",
  },
  {
    id: 3,
    title: "Microsoft Office Specialist Excel 2016",
    provider: "Microsoft",
    date: "November 2022",
    img: "../../../Excel 2016.jpg",
  },
  {
    id: 4,
    title: "Microsoft Office Specialist Word 2016",
    provider: "Microsoft",
    date: "October 2022",
    img: "../../../Word 2016.jpg",
  },
  {
    id: 5,
    title: "Industrial designer in general mechanics (BTP)",
    provider: "General Grombalia Mechanical Sectoral Training Center",
    date: "November 2020",
    img: "../../../btp.jpg",
  },
  {
    id: 6,
    title: "Technical superior in designing and manufacturing molds and tools (BTS)",
    provider: "Sousse Plastics Training Center",
    date: "December 2023",
    img: "../../../bts.jpg",
  },
  {
    id: 7,
    title: "B1 English Level",
    provider: "EFSET (en ligne)",
    date: "August 2022",
    img: "../../../english.jpg",
  },
  {
    id: 8,
    title: "Soft Skills",
    provider: "Tunisian professional training agency",
    date: "December 2023",
    img: "../../../skills.jpg",
  }
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => setSelectedCert(cert);
  const closeModal = () => setSelectedCert(null);

  return (
    <section id="certifications" className="certifications-section flex">
      <h2 className="section-title">Certifications & Educations</h2>
      <div className="certifications-grid">
        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            className="cert-card"
            whileHover={{ scale: 1.05 }}
            onClick={() => openModal(cert)}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img src={cert.img} alt={cert.title} className="cert-image" />
            <div className="cert-info">
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-provider">{cert.provider}</p>
              <p className="cert-date">{cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for displaying the larger card */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="cert-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="modal-content">
              <img src={selectedCert.img} alt={selectedCert.title} className="modal-image" />
              <div className="cert-info">
                <h3 className="cert-title">{selectedCert.title}</h3>
                <p className="cert-provider">{selectedCert.provider}</p>
                <p className="cert-date">{selectedCert.date}</p>
              </div>
              <button className="close-btn" onClick={closeModal}>Close</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
