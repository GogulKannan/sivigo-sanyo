import React, { Component } from 'react';

import  './Modal.css';
import Aux from '../../../hoc/_Aux/_Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    
    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show;
    }

    render () {
        return (
            <Aux>
                <div className="mainModal" style={{
                            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                            opacity: this.props.show ? '1' : '0'
                        }}>
                    <Backdrop show={this.props.show} clicked={this.props.modalClosed} />                            
                    <div className="Modal">
                        {this.props.children}
                    </div>
                </div>
            </Aux>
        )
    }
}

export default Modal;