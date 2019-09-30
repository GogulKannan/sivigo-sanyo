import React, { Component } from 'react';
import Aux from '../../../hoc/_Aux/_Aux';
import  './BasicDesign.css';

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

let detailsObj = [];
class BasicDesign extends Component {

    render () {
        var tempObj = {
            header: this.props.header,
            content: this.props.content,
            modalList:this.props.modalList
        }

        detailsObj[this.props.id] = tempObj;

        let attachedClasses = ["section"];
        if (this.props.side && this.props.side === 1) {
            attachedClasses = ["section", "section-light"];
        }else if(this.props.side && this.props.side === 2){
            attachedClasses = ["section", "section-light2"];
        }else{
            attachedClasses = ["section", "section-hidden"];
        }        
        
        let animaion = "slideInLeft";
        if(this.props.animation ===1){
            animaion = "slideInRight";
        }
        return (
            <Aux>
                {/* this.state.heading=this.props.header; */}
                <section className={attachedClasses.join(' ')}>
                    <ScrollAnimation animateIn={animaion} offset={50}>
                        <h2 className="my-header">{this.props.header}</h2>
                    </ScrollAnimation>   
                </section>                
                <div className="pimg" style={{backgroundImage: "url(" + this.props.bg + ")"}}>
                <div  className = "ptext-cardcontent">
                    <h2 className = "learnMoreSubHeading">{this.props.subHeading}</h2>
                    <p>{this.props.content}</p>
                <button 
                    className="LearnMore"
                    onClick={() => this.props.modalShow(detailsObj, this.props.id)} id={this.props.id}>LEARN MORE</button>
                </div>
                </div>

               
            </Aux>
        )
    }
}

export default BasicDesign;