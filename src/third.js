import React from 'react';

function getValue(element) {
    switch (typeof element) {
      case "number":
         return [element];
      case "object":
          const keys = Object.keys(element);
          let sum = [];
          keys.forEach(el => {
              const arr = getValue(element[el]);
              sum = [...sum,...arr];
          });
          return sum;
  
      default:
        return;
    }
  }

const Third = () => {
    const arr = [1, [2, 3, [4], [5]], 6, [7], [[[8]]]]

    let rezult = [];
    arr.forEach(element => {
        const arr = getValue(element);
        rezult = [...rezult,...arr];
    });
  
    console.log('rezult', rezult);
  
   


return(
    <div>Third</div>
)
}

export default Third;