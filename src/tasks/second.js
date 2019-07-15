import React from "react";

const Second = () => {
  const arr = [1, -5, 1, 3, 8, 65, "hello", -7]; //78

  const reducer = (sum, el) =>
    el < 0 || typeof el !== "number" ? sum : sum + el;

  console.log(arr.reduce(reducer));

  return <div>Second</div>;
};

export default Second;
