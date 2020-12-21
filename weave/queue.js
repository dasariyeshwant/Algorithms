class Queue {
  constructor() {
    this.data = [];
  }
  add(record) {
    this.data.unshift(record);
  }
  remove(record) {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}
export default Queue;