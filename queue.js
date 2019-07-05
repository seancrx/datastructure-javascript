class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  isEmpty() {
    return this.front === null && this.rear === null;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
        this.front = newNode;
    } else {
        this.rear.next = newNode;
    }
    this.rear = newNode;
    this.rear.next = null;
  }

  dequeue() {
      const toRemove = this.front;
      if(!this.isEmpty()) {
          this.front = this.front.next;
          if(this.front === null) {
              this.rear = null;
          }
      }
      return toRemove.data;
  }

  printQueue() {
      if(this.isEmpty()) {
          console.log('Empty queue');
      } else {
          let current = this.front;
          while(current) {
              console.log(current.data);
              current = current.next;
          }
      }
  }
}