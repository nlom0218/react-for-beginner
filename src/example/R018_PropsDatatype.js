import React from 'react';
import datatype from "prop-types"



const PropsDatatype = ({ String, Number, Boolean, Array, Obj, Function }) => {
    console.log(Boolean);
    console.log(Array);
    console.log(Obj);
    return (
        <div style={{ padding: "0px" }}>
            <p>StringProps: {String}</p>
            <p>NumberProps: {Number}</p>
            <span>BooleanProps: {Boolean.toString()}</span>
            <p>ArrayProps: {JSON.stringify(Array)}</p>
            <p>ObjectProps: {JSON.stringify(Obj)}</p>
            <p>FunctionProps: {Function}</p>
        </div>
    );
}

PropsDatatype.propTypes = {
    String: datatype.number,
    Number: datatype.number,
    Boolean: datatype.bool,
    Array: datatype.array,
    Object: datatype.object,
    Function: datatype.func
}

export default PropsDatatype;