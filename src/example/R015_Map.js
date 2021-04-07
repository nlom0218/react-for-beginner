import React, { Component } from 'react';

class Map extends Component {
    componentDidMount() {
        const Map_Arr = [3, 2, 8, 8]
        let Map_newArr = Map_Arr.map(item => item)
        console.log(`1. Map_newArr : [${Map_newArr}]`);

        let Map_mulititArr = Map_Arr.map(item => item * 2)
        console.log(`2. Map_mulititArr : [${Map_mulititArr}]`);

        const ObjArray = [
            { key: "react", value: "200" },
            { key: "리액트", value: "TwoHundred" }
        ]
        const Map_objArr = ObjArray.map((item, index) => {
            console.log(`${index + 3}.obj : ${item}`);
            const Obj = {}
            Obj[item.key] = item.value
            return Obj
        })
        console.log(`5. Map_objArr : ${JSON.stringify(Map_objArr)}`);
    }
    render() {
        return (
            <h2>[This is Map]</h2>
        );
    }
}

export default Map;