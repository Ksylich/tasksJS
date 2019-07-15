import React from "react";



const Second = () => {
  const arr = [1, -5, 1, 3, 8, 65, -7]; //66


  const reducer = (sum, el) => sum + el;

  console.log(arr.reduce(reducer));

  return <div>Second</div>;
};

export default Second;
