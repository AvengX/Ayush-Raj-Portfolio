import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              AYUSH
              <br />
              <span>RAJ</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>C++ Developer | Python Programmer | AI/ML Enthusiast</h3>
            <p className="landing-tagline">
              Passionate about problem solving, machine learning, and building impactful applications.
            </p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
