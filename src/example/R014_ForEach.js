import React, { Component } from 'react';

class ForEach extends Component {

    componentDidMount() {
        const For_arr = [3, 2, 8, 8]
        let For_newArr = []
        for (let i = 0; i < For_arr.length; i++) {
            For_newArr.push(For_arr[i])
        }
        console.log(`1. For_newArr : [${For_newArr}]`);

        const ForEach_Arr = [3, 3, 9, 8]
        let ForEach_newArr = []
        ForEach_Arr.forEach(item => {
            ForEach_newArr.push(item)
        })
        console.log(`2. ForEach_newArr : [${ForEach_newArr}]`);
    }
    render() {
        return (
            <h2>[This is ForEach]</h2>
        );
    }
}

export default ForEach;