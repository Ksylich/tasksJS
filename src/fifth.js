import React from "react";

const Fifth = () => {
  let counter = 10;

  const timerId  = setInterval(() => {
      console.log(counter--);
  }, 1000);

  setTimeout(() => {
      clearInterval(timerId);
      setTimeout(() => {
        console.log('boom');
    },1000)
    }, 10000);

    
  return <div>Fifth</div>;
};

export default Fifth;
