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


