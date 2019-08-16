class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head =  null
        this.tail = null
        this.length = 0
    }

    push(val) {
        const node = new Node()
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = node
            this.tail = node
        }        
        this.length++
    }

    pop() {
        if(!this.head) return undefined;
        let pointer = this.head
        let newTail = pointer //Initialising here considering case of only 1 node in LL
        while(pointer.next) {
            newTail = pointer
            pointer = pointer.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length===0) {
            this.head = null
            this.tail = null
        }
    }

    //pos is 0-index based
    traverse(pos) {
        if(pos >= this.length)
            return null
        const pointer = this.head
        for(let i=0; i<pos; i++) {
            pointer = pointer.next
        }
        return pointer
    }

    unshift(val) {
        const node = new Node(val)
        if(!this.head) {
            this.head = node;
            this.tail = this.head;
        }
        node.next = this.head
        this.head = node
        this.length = this.length + 1
    }

    shift() {
        if(!this.head) return undefined;
        const pointer = this.head
        this.head = pointer.next
        this.length = this.length - 1
        if(this.length === 0){
            this.tail = null;
        }
        return pointer
    }

    get(pos) {
        return this.traverse(pos) && this.traverse(pos).val
    }

    set(val, pos) {
        const currentNode  = this.get(pos)
        if(currentNode)
            currentNode.val = val
    }

    insert(node,pos) { 
        //Previous element next is to be set to node, and this element next is to be set to current element
        if(pos===0) {
            this.unshift(node)
        } else if(pos>=this.length) {
            this.push(node)
        } else {
            const leftNode = this.get(pos-1)
            const currentNode = leftNode.next
            leftNode.next = node
            node.next = currentNode
            this.length = this.length + 1
        }
    }

    remove(pos) {
        if(pos===0) {
            this.shift()
        } else if(pos=this.length-1) {
            this.pop()
        } else {
            const leftNode = this.get(pos-1)
            const currentNode = leftNode.next
            leftNode.next = currentNode.next
            this.length = this.length - 1
            return currentNode
        }
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let after
        let before = null //At the start before is null, node is head
        for (let i=0; i<this.length; i++) {
            after = node.next
            node.next = before
            before = node
            node = after
        }
        return this
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //Ascertain if the pos is closer to head or tail and traverse accordingly
    //Searching is technically O(n/2) in comparison to O(n) of singly linked list
    get(pos) {

    }
}