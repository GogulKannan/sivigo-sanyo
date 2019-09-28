import React, { Component } from 'react';

import Aux from '../../hoc/_Aux/_Aux';


class LearnMore extends Component {
    // This could be a functional component, doesn't have to be a class

    render () {

        document.body.style.overflow = 'hidden';

        const heading = this.props.heading;
        const content = this.props.content;
        return (
            <Aux>
                <h1>{heading}</h1>
                <p>{content} </p>
                <ul>
                </ul>
                {/* <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button> */}
            </Aux>
        );
    }
}

export default LearnMore;