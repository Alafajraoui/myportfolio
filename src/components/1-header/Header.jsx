import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flex">
      <button onClick={() => setShowModal(true)} className="menu icon-menu flex"></button>
      <div />

      <nav>
        <ul className="flex">
          <li>
            <button
              onClick={() => handleScrollToSection("about")}
              className="link-button"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollToSection("projects")}
              className="link-button"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollToSection("certifications")}
              className="link-button"
            >
              Certifications & Educations
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollToSection("experience")}
              className="link-button"
            >
              Professional Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollToSection("contact")}
              className="link-button"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark");
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li>
              <button className="icon-close" onClick={() => setShowModal(false)}></button>
            </li>
            <li>
              <button onClick={() => handleScrollToSection("about")} className="link-button">
                About
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollToSection("projects")} className="link-button">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollToSection("certifications")} className="link-button">
                Certifications & Educations
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollToSection("experience")} className="link-button">
                Professional Experience
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollToSection("contact")} className="link-button">
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
