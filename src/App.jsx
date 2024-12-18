import Hero from "./components/2-hero/Hero";
import Header from "./components/1-header/Header";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import Certifications from "./components/6-Certifications/Certification";
import ProfessionalExperience from "./components/7-experience/Experience"

function App() {
  return (
    <div id="up" className="container">
      <Header />

      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Certifications />
      <div className="divider" />
      <ProfessionalExperience/>
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

    <a href="#up">
        <button className="icon-keyboard_arrow_up scroll2Top"></button>
    </a>
    </div> 
  );
}

export default App;
