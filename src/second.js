import React from "react";

function getValue(element) {
  switch (typeof element) {
    case "number":
        if(element > 0){
            return element;
        }
        else return 0;
    case "string":
        const val = parseInt(element);
        if(val > 0){
            return val;
        }
        else return 0;
    case "object":
        const keys = Object.keys(element);
        let sum = 0;
        keys.forEach(el => {
            sum+=getValue(element[el]);
        });
        return sum;

    default:
      return;
  }
}

const Second = () => {
  const arr = [1, -5, 1, 3, "4", [3], "text", 8, "33", 65, -7, { 5: 3 }]; //121

  let sum = 0;
  arr.forEach(element => {
      sum+=getValue(element);
  });

  console.log('rezult', sum);

  return <div>Second</div>;
};

export default Second;
