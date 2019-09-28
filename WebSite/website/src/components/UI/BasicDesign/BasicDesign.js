import React, { Component } from 'react';
import Aux from '../../../hoc/_Aux/_Aux';
import  './BasicDesign.css';
import Modal from '../Modal/Modal';
import LearnMore from '../../../components/LearnMore/LearnMore';

let learnMore = null;


class BasicDesign extends Component {
    state = {
        showModal: false,
        heading:"SCAFFOLDING WORKS"
      }
    
    
      showMoreDetails = () => {
        this.setState({ showModal: true });
        console.log("showMore")
        learnMore = <LearnMore heading={this.state.heading} />;
      }
    
      closeShowMore = () => {
        this.setState({ showModal: false });
      }

    render () {
        let attachedClasses = ["section"];
        if (this.props.side && this.props.side === 1) {
            attachedClasses = ["section", "section-light"];
        }else if(this.props.side && this.props.side === 2){
            attachedClasses = ["section", "section-light2"];
        }else{
            attachedClasses = ["section", "section-hidden"];
        }          
        return (
            <Aux>
                {/* this.state.heading=this.props.header; */}
                <section className={attachedClasses.join(' ')}>
                    <h2 className="my-header">{this.props.header}</h2>
                </section>                
                <div className="pimg" style={{backgroundImage: "url(" + this.props.bg + ")"}}>
                <button 
                    className="LearnMore"
                    onClick={this.showMoreDetails}>Learn More .. </button>
                </div>

                <Modal show={this.state.showModal} modalClosed={this.closeShowMore}>
                    {learnMore}
                </Modal>
            </Aux>
        )
    }
}

export default BasicDesign;