/**
 * Idea is to have a children array instead of left & right to make it more general.
 * And instead to mark all left, we can say all children[0], so in general we can look 
 * for all children[n] where n is indicative of the pass
 */

const Stack = require('./stack-queue.js').Stack
const Queue = require('./stack-queue.js').Queue
const TreeNode = require('./trees.js').TreeNode

class GenericTree {
    constructor() {
    }
    /**
     * This uses a Queue to add all children, and then to traverse through them.
     * BFS means travese one level at a time and then go to next level
     */
    bfsTraversal(root) {
        const path = []
        if(root.children.length === 0)
            path.push(root.val)
        else {
            let bfsQueue = new Queue();
            bfsQueue.enqueue(root)
            while(bfsQueue.size!==0) {
                const currentNode = bfsQueue.dequeue()
                for (let child of currentNode.children) {
                    bfsQueue.enqueue(child)
                }
                path.push(currentNode.val)
            }
        }
        return path
    }
    /**
     * This uses a stack. Dfs means traverse one route deptwise completely and then to alternate ones
     * Preorder in BST/BT means first root, then left, and then right. For an n-ary tree there are no
     * left & right defined, so we iterate over all the children in the array. So this essentially means
     * first root, then children. To maintain similarity with BST/BT, first children is considered to be left, rest
     * all are right
     */
    preorderTraversal(root) {
        const path = []
        if(root.children.length === 0)
            path.push(root.val)
        else {
            let preStack = new Stack();
            preStack.push(root)
            while(preStack.size!==0) {
                const currentNode = preStack.pop()
                path.push(currentNode.val)
                const currentChildren = currentNode.children
                //Children are looped from right to left so that they enter stack accordingly, and is popped out left to right
                for (let i=currentChildren.length-1; i>=0; i--) {
                    preStack.push(currentChildren[i])
                }
            }
        }
        return path
    }
    /**
     * This uses a stack. Dfs means traverse one route deptwise completely and then to alternate ones
     * Postorder in BST/BT means first left, then right and then root. For an n-ary tree there are no
     * left & right defined, so we iterate over all the children in the array. So this essentially means
     * first children, then root. To maintain similarity with BST/BT, first children is considered to be left, rest
     * all are right. 
     */
    postorderTraversal(root) {
        const path = []
        const rootChildren = root.children
        if(rootChildren.length === 0)
            path.push(root.val)
        else {
            let preStack = new Stack();
            preStack.push(root)
            while(preStack.size!==0) {
                const currentNode = preStack.pop()
                const currentChildren = currentNode.children
                if(currentChildren.length > 0 && !currentNode.visited) {
                    //An addl visited flag is being used to identify that it already has been recorded
                    currentNode.visited = true
                    preStack.push(currentNode)
                    //Children are looped from right to left so that they enter stack accordingly, and is popped out left to right
                    for (let i=currentChildren.length-1; i>=0; i--) {
                        preStack.push(currentChildren[i])
                    }
                } else {
                    //Visited flag is reset
                    currentNode.visited = false
                    path.push(currentNode.val)
                }                
            }
        }
        return path
    }
    /**
     * YOU CAN'T REALLY DO AN INORDER WITH N-ARY BECAUSE NO CLEAR LEFT & RIGHT IS DEFINED
     * Inorder in BST/BT means first left, then root and then right. For an n-ary tree there are no
     * left & right defined,and unlike pre & post order where left & right followed each other so 
     * you could club it as children that can't be done here. For the sake of operation, the first child 
     * has been considered as left, but diagram wise it can very well be a case where a node has only
     * right child and in that case in-order doesn't really apply.
     */
    inorderTraversal(root) {
        const path = []
        const rootChildren = root.children
        if(rootChildren.length === 0)
            path.push(root.val)
        else {
            let preStack = new Stack();
            preStack.push(root)
            while(preStack.size!==0) {
                const currentNode = preStack.pop()
                const currentChildren = currentNode.children
                if(currentChildren.length > 0 && !currentNode.visited) {
                    for (let i=currentChildren.length-1; i>=1; i--) {
                        preStack.push(currentChildren[i])
                    }
                    currentNode.visited = true
                    preStack.push(currentNode)
                    preStack.push(currentChildren[0])
                } else {
                    currentNode.visited = false
                    path.push(currentNode.val)
                }                
            }
        }
        return path
    }

    postOrderRecursion(root) {
        const path = []
        function traverse(node) {
            const [firstChild, ...otherChildren] = node.children
            if(firstChild) traverse(firstChild)
            if(otherChildren.length > 0) {
                for(let child of otherChildren) {
                    traverse(child)
                }
            }
            path.push(node.val)
        }
        traverse(root)
        return path
    }
}

let root = new TreeNode(1) 
root.children.push(new TreeNode(2)) 
root.children.push(new TreeNode(3)) 
root.children.push(new TreeNode(4))  
root.children[0].children.push(new TreeNode(5))  
root.children[0].children[0].children.push(new TreeNode(10))  
root.children[0].children.push(new TreeNode(6))  
root.children[0].children[1].children.push(new TreeNode(11)) 
root.children[0].children[1].children.push(new TreeNode(12)) 
root.children[0].children[1].children.push(new TreeNode(13))  
root.children[2].children.push(new TreeNode(7)) 
root.children[2].children.push(new TreeNode(8)) 
root.children[2].children.push(new TreeNode(9)) 

const treeTraversal = new GenericTree()
console.log(treeTraversal.bfsTraversal(root))
console.log(treeTraversal.preorderTraversal(root))
console.log(treeTraversal.postorderTraversal(root))
console.log(treeTraversal.inorderTraversal(root))

let postRoot = new TreeNode(10)
postRoot.children.push(new TreeNode(6)) 
postRoot.children.push(new TreeNode(15))
postRoot.children[0].children.push(new TreeNode(3))   
postRoot.children[0].children.push(new TreeNode(8))
postRoot.children[1].children.push(new TreeNode(20))


const postTreeTraversal = new GenericTree()
console.log(postTreeTraversal.postorderTraversal(postRoot))
console.log(postTreeTraversal.inorderTraversal(postRoot))

console.log(postTreeTraversal.postOrderRecursion(postRoot))