class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }

    push(data) {
        let newNode = new Node(data);
        if(this.isEmpty()) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    pop() {
        if(this.isEmpty()) {
            return;
        } else {
            const toRemove = this.head;
            this.head = this.head.next;
            return toRemove.data;
        }
    }

    printStack() {
        if(this.isEmpty()) {
            console.log('Empty stack');
        } else {
            let current = this.head;
            while(current) {
                console.log(current.data);
                current = current.next;
            }
        }
    }
}