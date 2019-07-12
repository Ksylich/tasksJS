import React from 'react';

const First = () => {

    const arr = [1, 6, 4, 9];
    arr.sort();
    const reversArr = [...arr];
    reversArr.reverse();
    const result = [...arr,...reversArr];
    // alert(`result: ${result}`);
    console.log('result', result);


return(
    <div>First</div>
)
}

export default First;