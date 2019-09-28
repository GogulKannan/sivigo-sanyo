import React, { Component } from 'react';
import Aux from '../../../hoc/_Aux/_Aux';
import  './BasicDesign.css';

let detailsObj = [];
class BasicDesign extends Component {

    render () {
        var tempObj = {
            header: this.props.header,
            content: this.props.content
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
        return (
            <Aux>
                {/* this.state.heading=this.props.header; */}
                <section className={attachedClasses.join(' ')}>
                    <h2 className="my-header">{this.props.header}</h2>
                </section>                
                <div className="pimg" style={{backgroundImage: "url(" + this.props.bg + ")"}}>
                <button 
                    className="LearnMore"
                    onClick={() => this.props.modalShow(detailsObj, this.props.id)} id={this.props.id}>Learn More .. </button>
                </div>
            </Aux>
        )
    }
}

export default BasicDesign;