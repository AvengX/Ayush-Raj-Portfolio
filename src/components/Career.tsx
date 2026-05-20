import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Vocational Training Intern</h4>
                <h5>Tata Steel Ltd.</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Designed and deployed the Smart Material Gate Pass System, reducing manual errors by 40%. Analyzed industrial data handling protocols within Information Security & Data Protection.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-author & Researcher</h4>
                <h5>ICCCN 2025 (Springer)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Co-authored a research paper focusing on Gen AI applications in the fashion industry. Proposed an AI-driven framework using Generative Adversarial Networks (GANs) and Variational Autoencoders (VAEs).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Student</h4>
                <h5>KIIT University</h5>
              </div>
              <h3>2022-26</h3>
            </div>
            <p>
              Pursuing Bachelor's degree with a CGPA of 7.82. Awarded KIIT Merit Scholarship for consistent academic performance. Solved 150+ DSA problems on Leetcode and HackerRank SQL Certified.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
