import React from 'react';
import './Home.css';
import homeBg1 from '../../assets/Images/home/1.png';
import homeBg2 from '../../assets/Images/home/2.png';
import homeBg3 from '../../assets/Images/home/3.png';
import homeBg4 from '../../assets/Images/home/4.png';

function Home() {
  return (
    
<div className="App">
      <div className="pimg"  style={{backgroundImage: "url(" + homeBg1 + ")"}}>
          <div className="ptext">
            <span className="border">
            Construction at its best
            </span>
          </div>
      </div>
      <section className="section section-light2">
        <h2 className="my-header">OUR MISSION</h2>
      </section>
      <div className="pimg" style={{backgroundImage: "url(" + homeBg2 + ")"}}>
        <div className="ptext-quote">
          <div className="quote-container">
            <div className="quote-text">
              To deliver services & products safely in excellent standards for the benefit of stakeholders and the community
            </div>
          </div>
        </div>
      </div>
      <section className="section section-light">
        <h2 className="my-header">Our vision</h2>
      </section>
      <div className="pimg pimg3" style={{backgroundImage: "url(" + homeBg3 + ")"}}>
        <div className="ptext-quote">
          <div className="quote-container">
            <div className="quote-text">
              Strive to deliver quality services in efficient & effective procedures. Shaping excellent people. Innovating & developing resources for the future
            </div>
          </div>
        </div>
      </div>
      <section className="section section-light2">
        <h2 className="my-header">OUR MOTTO</h2>
      </section>
      <div className="pimg" style={{backgroundImage: "url(" + homeBg4 + ")"}}>
      <div className="ptext">
            <span className="border-rev">
            YOUR SATISFACTION IS OUR PRIORITY
            </span>
          </div>
      </div>      
    </div>
    
  );
}

export default Home;
