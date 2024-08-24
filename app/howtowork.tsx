import React from "react";

const HowToWork: React.FC = () => {
  return (
    <section className="how-to-work">
      <h2>How It Works</h2>
      <div className="grid-container">
        <div className="grid-item">
          <img src="/howtowork1.png" alt="Step 1" className="screenshot" />
          <p className="explanation">Step 1: Enter phone number</p>
        </div>
        <div className="grid-item">
          <img src="/howtowork2.png" alt="Step 2" className="screenshot" />
          <p className="explanation">Step 2: Click button</p>
        </div>
        <div className="grid-item">
          <img src="/howtowork3.png" alt="Step 3" className="screenshot" />
          <p className="explanation">Step 3: Start conversation</p>
        </div>
      </div>
    </section>
  );
};

export default HowToWork;
