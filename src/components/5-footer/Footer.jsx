import "./footer.css";

const Footer = () => {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="flex">
      <nav>
        <ul className="flex">
          <li>
            <button onClick={() => handleScrollToSection("about")}>About</button>
          </li>
          <li>
            <button onClick={() => handleScrollToSection("projects")}>Projects</button>
          </li>
          <li>
            <button onClick={() => handleScrollToSection("certifications")}>Certifications</button>
          </li>
          <li>
            <button onClick={() => handleScrollToSection("experience")}>Professional Experience</button>
          </li>
          <li>
            <button onClick={() => handleScrollToSection("contact")}>Contact</button>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
