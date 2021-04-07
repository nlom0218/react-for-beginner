import React from 'react';

const Props = (props, { props_val }) => {
    console.log(props);
    props_val += " from App.js"
    return (
        <div>{props_val}</div>
    );
}

export default Props;