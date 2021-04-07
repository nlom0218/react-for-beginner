import React, { Component } from 'react';

class SpreadOperator extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        //javascript Array
        var varArray1 = ["num1", "num2"]
        var varArray2 = ["num3", "num4"]
        var sumVarArr = [varArray1[0], varArray1[1], varArray2[0], varArray2[1]]
        // var sumVarArr = [].concat(varArray1, varArray2)
        console.log(`1. sumVarArr : ${sumVarArr}`);

        //ES6 Array
        let sumLetArr = [...varArray1, ...varArray2]
        console.log(`2. sumLetArr : ${sumLetArr}`);

        const [sum1, sum2, ...remain] = sumLetArr
        console.log(sum1, sum2, `remain: ${remain}`);

        var varObj1 = { key1: "val1", key2: "val2" }
        var varObj2 = { key2: "val2", key3: "val3" }
        // js
        var sumVarObj = Object.assign({}, varObj1, varObj2)
        console.log(`4. sumVarObj : ${JSON.stringify(sumVarObj)}`);

        //es6
        let sumLetObj = { ...varObj1, ...varObj2 }
        console.log(`5. sumLetObj : ${JSON.stringify(sumLetObj)}`)
        let { key1, key3, ...others } = sumLetObj
        console.log(key1, key3, JSON.stringify(others));
    }

    render() {
        return (
            <h2>[THis is SpreadOperator]</h2>
        );
    }
}

export default SpreadOperator;