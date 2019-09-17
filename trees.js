class TreeNode {
    constructor(val) {
        this.val = val
        this.children = []
    }
}

class BinarySearchNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null //node
    }

    insert(val) {
        const node = new BinarySearchNode(val)
        if(this.root) {
                let currentNode = this.root
                while(true) {
                    if(val<currentNode.value) {
                        let left = currentNode.left
                        if(left)
                            currentNode = left
                        else {
                            currentNode.left = node
                            break;
                        }
                    }                     
                    else {
                        let right = currentNode.right
                        if(right)
                            currentNode = right
                        else {
                            currentNode.right = node
                            break;
                        }
                    }                        
                }                
        } else {
            this.root = node
        }
    }

    find(val) {
        let currentNode = this.root
        while(currentNode) {
            const currentNodeValue = currentNode.value
            if(val===currentNodeValue) {
                break
            } else if(val < currentNodeValue) {
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }
        }
        return currentNode
    }
}

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(8)
bst.insert(12)
bst.insert(1)
bst.insert(11)
bst.insert(7)
bst.insert(6)

console.log(JSON.stringify(bst))

module.exports = {
    TreeNode: TreeNode,
    BinarySearchNode: BinarySearchNode
}

/* console.log(bst.find(10))
console.log(bst.find(9))
console.log(bst.find(12))
console.log(bst.find(6))
console.log(bst.find(1))
console.log(bst.find(15)) */
