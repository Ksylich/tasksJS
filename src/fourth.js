import React from 'react';

const continueSequence = (arr) => {
    return arr;
}

 function mySequence() {
     const length = mySequence.arr.length;
     let rez;
     if(length > 1){
         rez = mySequence.arr[length-1] + mySequence.arr[length-2]
         mySequence.arr.push(rez);
     }
     else if (length === 1){
         rez  = mySequence.arr[0];
         mySequence.arr.push(rez);
     }

     return rez;
 }

const Fourth = () => {

    mySequence.arr = continueSequence([  1, 2, 3, 5  ]);
    console.log('rez',mySequence());
    console.log('rez',mySequence());


return(
    <div>Fourth</div>
)
}

export default Fourth;