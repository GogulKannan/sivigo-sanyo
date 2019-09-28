import React, { Component } from 'react';

import Aux from '../../hoc/_Aux/_Aux';
import Button from '../UI/Button/Button';

class LearnMore extends Component {
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render () {
        const heading = this.props.heading;
            

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {heading}
                </ul>
                {/* <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button> */}
            </Aux>
        );
    }
}

export default LearnMore;