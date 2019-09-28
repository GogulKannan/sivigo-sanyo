import React from 'react';
import './About.css';
import aboutBg1 from '../../assets/Images/about/1.png';
import aboutBg3 from '../../assets/Images/about/3.png';

import Aux from '../../hoc/_Aux/_Aux';
import Modal from '../../components/UI/Modal/Modal';
import LearnMore from '../../components/LearnMore/LearnMore';

function About(props) {

  let learnMore = null;
  learnMore = <LearnMore
                heading="heading 1" />;




  return (

    <div className="AboutMain" >
      <div className="pimg" style={{backgroundImage: "url(" + aboutBg1 + ")"}}>
        <div className="about-heading">
          <span className="border">
          CONSTRUCTION PROFESSIONALS
            </span>
        </div>
      </div>
      <section className="section section-light2">
        <h2 className="my-header-main">WHAT WE DO</h2>
        <div className="ptext-aboutMessage">
            Sanyo Engineering Pte Ltd was establish in Feb 2014, as a young,
            dynamic contractor specializing in the Integrated Civil Engineering,
            Project Management and M&E Works. We have been constantly striving hard
            to greater heights through hard work, innovation, value engineering and
            sustainable progressive growth providing responsive and quality services to our clients.
        </div>   
        <h2 className="my-header-sub">PLANT CIVIL WORK</h2>                     
      </section>

      <div className="pimg" style={{backgroundImage: "url(" + aboutBg3 + ")"}}>
        <div className="cardMain">
        {/* <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {learnMore}
                </Modal>

            </Aux> */}

          <button 
            className="LearnMore"
            onClick={props.heading}>Learn More .. </button>
          </div>
      
        
      </div>
       



        {/* <div className="AboutBase">
          <h2><u>Civil Engineering Construction Works/PLANT CIVIL WORKS</u></h2>
          <li>Construction of Roads</li>
          <li>Widening, Extension, Re-marking and Maintenance of Roads</li>
          <li>Construction of Walkways</li>
          <li>Construction & Maintenance of Road Drainage</li>
          <li>Equipment foundation</li>
          <li>Cable Trench excavation and backfilling </li>
          <h3>Safety Works</h3>
          <p>Since its founding, Sanyo Engineering Pte Ltd has been one of the most trusted names in the industry. Hire us for this service and
learn how we cater to the needs of each client, ensuring the results you need and deserve.</p>
          <h2><u>Scaffolding Works</u></h2>
          <li>Erection and Dismantling of Scaffolds</li>
          <li>Supply qualified scaffold supervisors and erectors </li>
          <h4>Built with Good Support</h4>
          <p>Since its founding, Sanyo Engineering Pte Ltd has been one of the most trusted names in the industry.
            Hire us for this service and learn how we cater to the needs of each client,
        ensuring the results you need and deserve.</p>
          <h2><u>INSULATION WORKS</u></h2>
          <li>Hot and Cold Insulation Services</li>
          <li>Supply of Insulation Materials</li>
          <li>Installation of Insulation for pipes and equipment’s in Process & Construction
Industry </li>
          <h4>Attention to Details</h4>
          <p>Sanyo Engineering Pte Ltd is committed to getting the job done, especially when it comes to this service. You can count on us to be professional,
timely, efficient and make sure you’re satisfied every step of the way.</p>
          <h2><u>MANPOWER PROVISION</u></h2>
          <li>Provides professionals</li>
          <li> skilled / semi-skilled tradesmen for the Process Maintenance & Construction</li>
          <li> Building Construction</li>
          <li> Oil and Gas Industry </li>
          <h4>Skilled and Experience</h4>
          <p>We have the experience and skills necessary to tackle just about every type of job that comes our way. With Sanyo Engineering Pte Ltd,
 clients know exactly what to expect - professionalism, efficiency and exceptional results.</p>
          <h2><u>BLASTING / PAINTING WORKS</u></h2>
          <li>On Site Blasting & Painting Services</li>
          <li>Power Brush & Roller Painting</li>
          <li>Hydro Jet Washing </li>
          <h4>Good Quality Finish</h4>
          <p>We have the experience and skills necessary to tackle just about every type of job that comes our way. With Sanyo Engineering Pte Ltd, clients know exactly what to expect - professionalism, efficiency and exceptional results.</p>
          <h2><u>MAINTENANCE PROCESS PLANT</u></h2>
          <h4>Quality Management</h4>
          <p>We have the experience and skills necessary to tackle just about every type of job that comes our way. With Sanyo Engineering Pte Ltd, clients know exactly what to expect - professionalism, efficiency and exceptional results.</p>

          <h3><u>Other Specialization:</u> </h3>
          <li>Mechanical Works</li>
          <li>Steel Structural Works</li>
          <li>Concrete Repair Works</li>
          <li>Coring Works</li>
          <li>Demolition Works</li>
          <li>Road Works</li>
          <li>Excavation of Ground</li>
          <li>Backfilling of Soil/ Sand </li>
          <h1>THE SANYO TEAM</h1>

          <ul className="flex-container">
            <li className="flex-item">1</li>
            <li className="flex-item">2</li>
            <li className="flex-item">3</li>
          </ul>

          <ul className="flex-container">
            <li className="flex-item">4</li>
            <li className="flex-item">5</li>
            <li className="flex-item">6</li>
          </ul>

          <ul className="flex-container">
            <li className="flex-item-q">"tell me something"</li>
            <li className="flex-item-q">"say hi all"</li>
          </ul>

        </div> */}

    </div>







  );
}

export default About;