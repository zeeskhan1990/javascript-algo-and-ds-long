const Stack = require('./stack-queue.js').Stack
const Queue = require('./stack-queue.js').Queue

const PriorityQueue = require('./Resources/Priority-Queue.js').PriorityQueue

class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = []
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1, vertex2) {
        const firstEdgeIndex = this.adjacencyList[vertex1].findIndex((edge) => edge === vertex2)
        const secondEdgeIndex = this.adjacencyList[vertex2].findIndex((edge) => edge === vertex1)
        if(firstEdgeIndex!==-1) {
            this.adjacencyList[vertex1].splice(firstEdgeIndex,1)
        }
        if(secondEdgeIndex!==-1) {
            this.adjacencyList[vertex2].splice(secondEdgeIndex,1)
        }
    }

    removeVertex(vertex) {
        const affectedVertices = [...this.adjacencyList[vertex]]
        for (let otherVertex of affectedVertices) {
            this.removeEdge(vertex, otherVertex)
        }
        delete this.adjacencyList[vertex]
    }

    dfsRecursion(vertex) {
        let result = []
        let visited = {}
        function adjacenyTraverse(vertex) {
            if(this.adjacencyList[vertex].length === 0)
            return        
            result.push(vertex)
            visited[vertex] = true
            for(let neighbor of this.adjacencyList[vertex]) {
                if(!visited[neighbor]) {
                    adjacenyTraverse(neighbor)
                }
            }
        }
        adjacenyTraverse = adjacenyTraverse.bind(this)
        adjacenyTraverse(vertex)
        return result 
    }

    dfsIterative(vertex) {
        let result = []
        let visited = {}
        let stack = new Stack()
        stack.push(vertex)
        
        while(stack.size!==0) {
            const currentNode = stack.pop()
            if(!visited[currentNode]) {
                visited[currentNode] = true
                result.push(currentNode)
                for(let neighbor of this.adjacencyList[currentNode]) {
                    stack.push(neighbor)
                }
            }
        }
        return result
    }

    bfs(vertex) {
        let result = []
        let visited = {}
        let queue = new Queue()
        queue.enqueue(vertex)

        while(queue.size!==0) {
            const currentNode = queue.dequeue()
            if(!visited[currentNode]) {
                visited[currentNode] = true
                result.push(currentNode)
                for(let neighbor of this.adjacencyList[currentNode]) {
                    queue.enqueue(neighbor)
                }
            }
        }
        return result
    }
}


const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("D", "E")
graph.addEdge("D", "F")
graph.addEdge("E", "F")
console.log(graph)

console.log(graph.dfsRecursion("A"))
console.log(graph.dfsIterative("A"))

console.log(graph.bfs("A"))

/* graph.removeEdge("A", "C")
console.log(graph)

graph.removeVertex("D")
console.log(graph)

graph.removeVertex("A")
console.log(graph) */

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }

    findShortestPath(start, end) {
        let distances = {}
        let previous = {}
        const weightQueue = new PriorityQueue()
        let path = []
        for(let vertex of Object.keys(this.adjacencyList)) {
            if(vertex !== start) {
                distances[vertex] = Infinity
                weightQueue.enqueue(vertex, Infinity)
            } 
            else {
                distances[vertex] = 0
                weightQueue.enqueue(vertex, 0)
            }
            previous[vertex] = null
        }

        while(weightQueue.values.length !== 0) {
            //This brings about the step of choosing the smallest weight for next iteration
            //Check Priority-Queue structure for .val
            let currentVertex = weightQueue.dequeue().val
            if(currentVertex === end) {
                while(previous[currentVertex]) {
                    path.push(currentVertex)
                    currentVertex = previous[currentVertex]
                }
                break;
            }
            
            for (let neighbor of this.adjacencyList[currentVertex]) {
                const neighborNode = neighbor.node
                const neighborWeight = neighbor.weight
                const neighborDistance = distances[currentVertex] + neighborWeight
                const currentNeighborDistance = distances[neighborNode]
                
                if(neighborDistance < currentNeighborDistance) {
                    distances[neighborNode] = neighborDistance
                    previous[neighborNode] = currentVertex
                    weightQueue.enqueue(neighborNode, neighborDistance)
                }

            }
        }
        return path.concat(start).reverse()
    }
}

const weightedGraph = new WeightedGraph()
weightedGraph.addVertex("A")
weightedGraph.addVertex("B")
weightedGraph.addVertex("C")
weightedGraph.addVertex("D")
weightedGraph.addVertex("E")
weightedGraph.addVertex("F")


weightedGraph.addEdge("A", "B", 4)
weightedGraph.addEdge("A", "C", 2)
weightedGraph.addEdge("D", "C", 2)
weightedGraph.addEdge("F", "C", 4)
weightedGraph.addEdge("D", "F", 1)
weightedGraph.addEdge("F", "E", 1)
weightedGraph.addEdge("D", "E", 3)
weightedGraph.addEdge("B", "E", 3)

console.log(JSON.stringify(weightedGraph))

console.log(weightedGraph.findShortestPath("A", "E"))
console.log(weightedGraph.findShortestPath("F", "A"))
console.log(weightedGraph.findShortestPath("D", "B"))
