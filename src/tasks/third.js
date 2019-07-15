import React from "react";

function getArray(arr) {
  return arr.reduce((sum, el) => {
    return sum.concat(Array.isArray(el) ? getArray(el) : el);
  }, []);
}

const Third = () => {
  const arr = [1, [2, 3, [4], [5]], 6, [7], [[[8]]]];

  console.log("rezult", getArray(arr));

  return <div>Third</div>;
};

export default Third;
