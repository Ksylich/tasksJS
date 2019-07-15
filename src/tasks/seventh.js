import React from "react";

function Node(data, next) {
    this.data = data;
    this.next = next;
  } 

function getAll(last) {
  let node = last;
  const nodes = []
  while (node !== null) {
    nodes.unshift(node);
    node = node.next;
  }

  nodes.forEach(element => {
      console.log('data: ', element.data);
      console.log('next: ', element.next);
      console.log('');
  })
}

const Seventh = () => {
  const n1 = new Node("first", null);
  const n2 = new Node("second", n1);
  const n3 = new Node("third", n2);
  const n4 = new Node("fourth", n3);
  const n5 = new Node("fifth", n4);
  const n6 = new Node("sixth", n5);
  const n7 = new Node("seventh", n6);

  getAll(n7);

  return <div>Seventh</div>;
};

export default Seventh;
