import React, { Component } from 'react';
import './Home.css';
import homeBg1 from '../../assets/Images/home/1.png';
import homeBg2 from '../../assets/Images/home/2.png';
import homeBg3 from '../../assets/Images/home/3.png';
import homeBg4 from '../../assets/Images/home/4.png';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScrollHeight: window.scrollY
    };
  }

  componentDidMount() {
    window.onscroll = () => {
      // this.setState({currentScrollHeight: window.scrollY});
      const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
    if (this.state.currentScrollHeight != newScrollHeight){
        this.setState({currentScrollHeight: newScrollHeight})
    }
    }
  }
  
  render() {
    const opacity = Math.min(100 / this.state.currentScrollHeight, 1)-0.1;

  return (
    
<div className="App">
      <div className="pimg"  style={{backgroundImage: "url(" + homeBg1 + ")"}}>
          <div className="ptext">
            <span className="borders">
            Construction at its best
            </span>
          </div>
      </div>
      <section className="section section-light2">
      <ScrollAnimation animateIn="slideInRight" offset={50}>
        <h2 className="my-header">OUR MISSION</h2>
      </ScrollAnimation>        
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
        <ScrollAnimation animateIn="slideInLeft" offset={50}>
          <h2 className="my-header">Our vision</h2>
        </ScrollAnimation>  
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
        <ScrollAnimation animateIn="fadeInRight"  offset={50}>
          <h2 className="my-header">OUR MOTO</h2>
        </ScrollAnimation>  
      </section>
      <div className="pimg" style={{backgroundImage: "url(" + homeBg4 + ")"}}>
      <div className="ptext">
            <span className="border-rev">
            YOUR SATISFACTION IS OUR PRIORITY
            </span>
          </div>
      </div>   
      <div style={{ opacity }} className="arrow bounce" />   
    </div>
    
  );
}
}

export default Home;
