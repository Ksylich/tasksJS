import React from 'react';

function getArray(arr) {
   let rezult = [];
   arr.forEach(element => {
      if(Array.isArray(element)){
        rezult = [...rezult,...getArray(element)];
      } 
      else {
          rezult.push(element);
      }
   });
   return rezult;
  }

const Third = () => {
    const arr = [1, [2, 3, [4], [5]], 6, [7], [[[8]]]];

  
    console.log('rezult', getArray(arr));
  
   


return(
    <div>Third</div>
)
}

export default Third;