import React, { Component } from 'react';

class R008_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log(`2. getDerivedSateFromProps Call : ${props.prop_value}`);
        return {
            tmp_state: props.prop_value
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            user: "me"
        }
        console.log("1. constructor Call");
    }

    componentDidMount() {
        console.log("4. componentDidMount Call");
        console.log(`5. tep_state : ${this.state.tmp_state}`);
        console.log(this.state.tmp_state, this.state.user);
        this.setState({ tmp_state: "Change", user: "you" })
    }

    shouldComponentUpdate(props, state) {
        console.log(`6. shouldComponentUpdate`);
        console.log(`7. tep_state: ${state.tmp_state}`);
        console.log(this.state.user);
        return true
    }

    render() {
        console.log("3. render Call");
        return (
            <h2>[This is componentdidmount function]</h2>
        );
    }
}

export default R008_LifecycleEx;