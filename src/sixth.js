import React from "react";

function Node(data, prev) {
  this.data = data;
  this.prev = prev;
}

function getAll(last) {
  let node = last;
  while (node !== null) {
    console.log("data: ", node.data);
    console.log("prev: ", node.prev);
    console.log("");
    node = node.prev;
  }
}

const Sixth = () => {
  const n1 = new Node("first", null);
  const n2 = new Node("first", n1);
  const n3 = new Node("first", n2);
  const n4 = new Node("fourth", n3);
  const n5 = new Node("fifth", n4);
  const n6 = new Node("fourth", n5);
  const n7 = new Node("first", n6);

  getAll(n7);

  return <div>Sixth</div>;
};

export default Sixth;
