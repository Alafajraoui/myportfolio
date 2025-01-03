import "./contact.css";
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import DoneAnimation from '../../../src/animations/Done.json'
import ContactAnimation from '../../../src/animations/Contact Us.json';
const Contact = () => {
  const [state, handleSubmit] = useForm("mrbzdapl");
  return (
    <section id="contact" className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact Me
      </h1>
      <p className="sub-title">
        Contact me for more information and Get notified when I publish
        something new.
      </p>

      <div style={{justifyContent:"space-between"}} className="flex">
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input autoComplete="off" required type="email" name="email" id="email" />
            <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
          </div>

          <div className="flex" style={{marginTop: "24px"}}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
          </div>

          <button  type="submit" disabled={state.submitting} className="submit">{state.submitting? "Submitting ...":"Submit"}</button>
          {state.succeeded && (<p className="flex" style={{fontSize:"18px" , marginTop:"1.7rem"}}> 
            <Lottie loop={false} style={{height:40}} animationData={DoneAnimation} />
            Your Message has been sent successfully </p>)}
        </form>
        <div className="animation">
        <Lottie className="ContactAnimation"  style={{height:355}} animationData={ContactAnimation} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
