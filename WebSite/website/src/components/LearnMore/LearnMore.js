import React, { Component } from 'react';

import Aux from '../../hoc/_Aux/_Aux';
import './LearnMore.css';
import logoImage from '../../assets/Images/logo.png';
import bizsafe from '../../assets/Images/bizsafe-3-logo.png';
import { ListGroup } from 'react-bootstrap';


class LearnMore extends Component {
    // This could be a functional component, doesn't have to be a class
    render () {
        const heading = this.props.heading;
        const content = this.props.content;
        const modalList = this.props.modalList.map((item, key)=>
        <ListGroup.Item key={item.id}>{item.value}</ListGroup.Item>);
        
    
        return (
            <Aux>
                <img src={logoImage} alt="logo" className="LearnMoreLogo" />
                <h1 className ="learnMoreHeading" >{heading}</h1>
                <div className="learnMoreContent">
                <p>{content} </p>
                <ListGroup>{modalList}</ListGroup>
                <button className="closeBtn" onClick={this.props.closeModal}>CLOSE</button>
                </div>
                <img src={bizsafe} alt="logo" className="bizSafeLogo" />
            </Aux>
        );
    }
}

export default LearnMore;