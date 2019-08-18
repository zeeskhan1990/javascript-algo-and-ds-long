Adding element to the start of the array is expensive.

Complexity in Objects -
Search - O(n), Insertion, Deletion, Lookup by key  - O(1)
Object.keys, Object.values, Object.entries - O(n), hasOwnProperty - O(1)

Array -
Access - O(1), Search - O(n)
Insertion & Removal - At end - O(1), At the start - Have to re-index every single other element - O(n)
Concat, Slice, Splice - O(n) [Though concat can technically be O(n+m)]
sort - O(nlogn)
forEach/map/filter/reduce - O(n)

Ways to Solve - [UCB SIR]

Understand the problem
Explore concrete examples
Break It Down
Simplify & Solve
Refactor

##

Frequency Pattern - To be used when the frequency of occurence of a certain value/event indicates a solution to the cgiven problem
Multiple pointers - When the evaluation steps of a problem mainly deals with two individual values at a time in a sequence
Sliding Window - When you have to keep track of a subset of data in a sequence
Divide & Conquer

Helper Recursion - When you need some external variable to store and update state on every cycle, and keeping it inside the recursion function would cause it to reset everytime

##Sorts
Bubble Sort - Bad in almost sorted arrays without the swap optimization, because it keeps on looking for elements to bubble up every pass even if the array is already sorted.
Optimization - Check if any swap took place in the last pass, if it didn't then it means it's not gonna take in this one too, so exit.

Selection Sort - In a single pass, find and 'select' the minimum value, and then at the end of the pass swap it at the start, thus placing the minimum at the beginning(in contrast to bubble where consolidation of max takes place at the end)
Only advantage over bubble is it just does lesser swaps.

Insertion Sort - Builds up the sort by gradually creating a larger left half which is sorted. So on every pass, it "inserts" an item at the correct position
Some place where insertion sort can work well is where data is being streamed in or coming in parts, since insertion sort works by gradually sorting the left of the array so on new data appending the net sort that has to be done would be quite less

Merge Sort - Three steps -> Split, Sort & Merge, until an array of length 0 or 1 because an array with 0 or 1 elem is already sorted
Complexity - Best, Average & Worst - O(nlog n)

Quick Sort - Best and average is O(nlog n) because log n decompositions everytime, and in every pass there are n comparisons.
Now, for worst case (already sorted array) with pivot 0, each decomposition only gives us one element array, so effectively it goes on for n no of steps, therefore worst case complexity is (n*n) = O(n^2). This happens when the pivot is always the least or maximum element. To counter this we can pivot around random/middle element with the assumption that on every pass we won't be picking the least or max element every single time.

LinkedList - A linked list has no indexes, it only has 'head','tail' and 'length'. Each element in ll is a node. A node contains a value and a pointer to next. Therefore linked list = | head, tail, length, [...node{value, pointer}] |

Array - indexed in order, insertion/deletion expensive, random access efficient. List - No indexes, i/d inexpensive, random access not allowed

## Trees -

Normal Trees
Binary  Trees - Trees having at most 2 children
Binary Search Trees (BST) - Binary Trees which are sorted in a particular order. Every left children is less than parent, and every right children is greater than parent. Complexity - Insertion & Access -> O(log n). But in the worst case, say there's a tree with only one side tree, so to access or add an element you would at max go to the end of that tree. Now the tree is uni-directional, so you would travel through all the elements, therefore complexity is O(n)
BST best and average case - O(log n), worst case - O(n)

Nodes have a parent child relation. Trees are non-linear because we can take many different paths unlike a list where there's one defined path. A Singly Linked List can be represented as a special case of a tree.
A node can only point to a children, not to it's parent & sibling.
A tree must have a "root" done, a single entry point to the tree.

## Tree Traversal
So, a tree having n children with no such restrictions as having values relative to a parent node. So a general tree having n no of childre. 
Find - So to find a value in the tree one has to visit each and every node in the tree to check if it matches the value. Now how we would go about traversing through those nodes in the tree is something that we need to sort.

One can start looking at nodes at each level of the tree, that is look up for the value among the siblings and if not found then look at the siblings one level down. You at a time, look across the breadth of the tree at a certain level to find the result. This is BFS.

Or, you can look for the value following a trail in a certain direction of the tree to it's maximum depth. And if not found then trace back and look up in other un-visted trails. This is DFS. These can be of three types - Pre, Post and In Order.

Bfs vs Dfs

For a fully flushed tree with lots of nodes on each level, a bfs would cause lots of nodes to store in the queue at a time whereas in a dfs at any given time in a stack or recursion frame you are just storing one branch. So dfs would be better for an almost symmetrical heavily branched tree, for trees like few long branches and not as symmetrical bfs may be better.

Time complexity is same O(n). The maximum height of a BST is O(logn)

A Dfs in-order in case of BST results in an in-order sorted array, so when a sorted output is needed then in-order

## Binary Heap
A heap is a particular kind of a tree. MaxBinaryHeap - Parent > Child, MinBinaryHeap - Parent < Child
BST => Left < Root < Right
Binary Heap => Left & Right < Root || Left & Right > Root

A Binary Heap - Can have max two child. All children of a node must be filled out before increasing depth. Left children must be filled first.

A representation of binary heap in array happens as per a couple of mathematical formula:
If a parent is at position 'n' it's left child is at 2n + 1, and it's right child is at 2n + 2
If a child is at position 'n', the parent is at Math.floor( (n-1)/2 )

## Priority Queue
Binary Heaps are used to implement Priority Queues. Priority Queues are like queues as in they follow the FIFO format. But the node with higher priority stands earlier than the one with the lower priority. For two nodes with equal priorities the standard queue enqueue rules apply. Usually a priority with lower integer value indicates higher priority. So a Min Binary Heap is ideal for this use case. For "enqueue" in this priority queue you just call insert of that MinBinaryHeap and for "dequeue" you just call the "remove/extract min" of that heap. Remember, in most use cases a lower priority integer value represents higher priority

It is better to implement a priority queue with a heap than with a list/array because in cases of huge lists, one would have to compare and search through the entire list to find the one with the highest priority. Here the access to the highest priority element is always much less and also while insertion the items do fall in place automatically as per their priority

Complexity of insertion and deletion is O(log n) because one can max go the depth no of times when bubbling up or down, and height of a binary tree's upper bound is log n.
Search is O(n) because there's no way to guarantee that the searched value can be found following a branch unlike BST. So one has to go through all elements

## Hash Table / Hash Map
So, a hash table is default to all languages. In JS, it is implemented as objects and maps. Now one can imagine a linear memory allocation such as an array. But there is no such default structure of memory allocation for object. So when you are storing something in an object, you under the hood are basically storing them in some linear memory allocation itself(remember malloc(), calloc()). 

Let's say you have an object like {"pink": "#fb0027"}
Now in some place in the memory the value "#fb0027" is stored. Consider that it's stored at some index in an array of length 100.
So array[n] = "#fb0027". In order to look up values by keys, in this case "#fb0027" by "pink", we need a way to convert keys into valid array indices". The function that does this conversion from key to array index is called *Hashing function*

Hashing function - Fast, should be almost constant time and not dependent on length of key to a great extent, output distributed uniformly, deterministic

## Hashing Collision resolution
Separate Chaining - At each index in our array we store using a complex data structure like array/linked list. For example -> darkblue = 4, salmon = 4. So at index 4 you have a nested array[["darkblue", "#03930"], ["salmon", "#fd3421"]]. So if you are looking for salmon key you hash, find index 4, and in 4 now you again look for a nested array having a value "salmon"

Linear probing - It involves storing one value at each location. If a certain index is occupied seek ahead for the next available space.

Complexity - 
Insert, Deletion, Access - O(1) [Best & Average Case]
O(n) - Worst case, since all the elements would be in the same index

## Graph
Graph = Nodes + Connections. A tree is a special type of graph
Graph can be weighted and directed

Adjacency Matrix : A B C D
                A  0 1 0 1
                B  1 0 1 1
                C  0 1 0 0
                D  1 1 0 0

Not suitable for sparse graph
Slower to iterate over all edges
Slower to lookup specific edge

Adjacency List : {
                    "A": ["B", "D"],
                    "B": ["A", "C", "D"],
                    "C": ["B" ],
                    "D": ["A", "B"]
                }

Suitable for sparse graph due to less space requirement
Faster to iterate over all edges
Faster to lookup specific edge

Dynamic Programming:
Overlaping subproblems, and optimal substructures

Memoization, tabular approach

Example - fib(n) = fib(n-2) + fib(n-1)