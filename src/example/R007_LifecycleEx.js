import React, { Component } from 'react';

class R006_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log(`2. getDerivedSateFromProps Call : ${props.prop_value}`);
        return {
            tmp_state: props.prop_value
        }
    }

    constructor(props) {
        super(props)
        this.state = {}
        console.log("1. constructor Call");
    }

    componentDidMount() {
        console.log("4. componentDidMount Call");
        console.log(`5. tem_state : ${this.state.tmp_state}`);
    }

    render() {
        console.log("3. render Call");
        return (
            <h2>[This is componentdidmount function]</h2>
        );
    }
}

export default R006_LifecycleEx;