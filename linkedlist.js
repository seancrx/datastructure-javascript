class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    insertLast(data) {
        if(!this.head) {
            this.head = new Node(data);
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = new Node(data);
        }
        this.size++;
    }

    insertAt(data, index) {
        if(index > 0 && index > this.size) {
            this.insertLast(data);
        }
        if(index === 0) {
            this.insertFirst(data);
        } else if(index === this.size) {
            this.insertLast(data);
        } else {
            let current = this.head;
            let count = 0;
            while(count < index-1) {
                current = current.next;
                count++;
            }
            let nextNode = current.next;
            current.next = new Node(data, nextNode);
        }
        this.size++;
    }

    getAt(index) {
        if(index >= this.size) {
            return;
        } else {
            let current = this.head;
            let count = 0;
            while(count < index-1) {
                current = current.next;
                count++;
            }
            console.log(current.next.data);
        }
    }

    removeFirst() {
        if(!this.head) {
            return;
        } else {
            this.head = this.head.next;
            this.size--;
        }
    }

    removeLast() {
        if(!this.head) {
            return;
        } else {
            let current = this.head;
            let count = 0;
            while(count < this.size-2) {
                current = current.next;
                count++;
            }
            current.next = null;
        }
        this.size--;
    }

    removeAt(index) {
        if(index >= this.size || !this.head) {
            return;
        } else if(index === 0) {
            this.removeFirst();
            return;
        } else if(index === this.size-1) {
            this.removeAt();
            return;
        } else {
            let current = this.head;
            let count = 0;
            while(count < index-1) {
                current = current.next;
                count++;
            }
            let toRemove = current.next;
            current.next = toRemove.next;
        }
        this.size--;
    }

    empty() {
        this.head = null;
        this.size = 0;
    }

    printListData() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}