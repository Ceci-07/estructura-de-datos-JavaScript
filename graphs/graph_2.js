class Graph {
  constructor() {
    this.nodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    this.adjacentList[node] = [];
    this.nodes++;
  }
  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
}
const myGraph = new Graph();


// const graph = {
//   1: [3, 4, 6],
//   3: [1, 5, 6],
//   4: [1, 5, 8],
//   5: [3, 4],
//   6: [1, 3],
//   8: [4],
// }
