class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val) {
        const node = new Node(val)
        if(this.size === 0) {
            this.first = this.last = node
        } else {
            let temp = this.first
            node.next = temp
            this.first = node
        }
        return ++this.size
    }

    pop() {
        if(this.size === 0) return undefined
        else {
            const node = this.first
            if(this.size === 1) {
                this.first = this.last = null
            } else {
                this.first = this.first.next
            }
            this.size--
            return node.val
        }
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.val;
    }
}

module.exports = {
    Stack: Stack,
    Queue: Queue
}