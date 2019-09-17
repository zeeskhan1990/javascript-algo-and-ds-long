class BinaryHeap{
    constructor() {
        this.values = []
    }

    insert(value) {
        const currentHeap = this.values
        currentHeap.push(value)
        let index = this.values.length - 1
        let parentIndex = Math.max(0, Math.floor((index-1)/2))
        while(currentHeap[parentIndex] < currentHeap[index]) {
            [currentHeap[parentIndex], currentHeap[index]] = [currentHeap[index], currentHeap[parentIndex]]
            index = parentIndex
            parentIndex = Math.max(0, Math.floor((index-1)/2))
        }
    }

    remove() {
        let currentHeap = this.values
        //Remove the top most element, i.e, 0th element
        let removedValue = currentHeap.shift()
        currentHeap.unshift(currentHeap.pop())
        let index = 0
        let biggerChildIndex = this.findGreaterChildIndex(currentHeap, index)
        while(biggerChildIndex && currentHeap[biggerChildIndex] > currentHeap[index]) {
            [currentHeap[biggerChildIndex], currentHeap[index]] = [currentHeap[index], currentHeap[biggerChildIndex]]
            index = biggerChildIndex
            biggerChildIndex = this.findGreaterChildIndex(currentHeap, index)
        }
        return removedValue
    }

    findGreaterChildIndex(currentHeap, parentIndex) {
        let leftChildIndex = 2*parentIndex + 1
        let rightChildIndex = 2*parentIndex + 2
        if(currentHeap[leftChildIndex]) {
            if(!currentHeap[rightChildIndex]) {
                return leftChildIndex
            } else {
                return currentHeap[leftChildIndex] > currentHeap[rightChildIndex] ? leftChildIndex : rightChildIndex
            }
        } else {
            return null
        }
    }
}

const heap = new BinaryHeap()
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap)

console.log(heap.remove())
console.log(heap)

console.log(heap.remove())
console.log(heap)

console.log(heap.remove())
console.log(heap)

console.log(heap.remove())
console.log(heap)

console.log(heap.remove())
console.log(heap)

console.log(heap.remove())
console.log(heap)

console.log(heap.remove())
console.log(heap)
