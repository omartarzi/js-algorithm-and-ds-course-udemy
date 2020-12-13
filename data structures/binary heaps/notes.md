## What is a binary heap
* Very similar to a binary search tree, but with some different rules
* In a MaxBinaryHeap, parent nodes are always larger than child nodes
* In a MinBinaryHeap, parent nodes are always smaller than child nodes
* Binary Heaps are used to implement Priority Queues, which are very commonly used data structures
* They are also used quite a bit, with graph traversal algorithms
* For any index of an array n, its left child can be found by 2n + 1 and right child by 2n + 2
  * Formula to find a child index based on the part

## Max Binary Heap
* Each parent has at most two child nodes
* The value of each parent node is always greater than its child nodes
* In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes (no implied ordering between siblings)
* A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

## Sink Down
* The procedure for deleting the root from the heap (effectively extracting the maximum element in a max-heap or the minimum element in a min-heap) and restoring the properties is called down-heap (also known as bubble-down, percolate-down, sift-down, trickle down, heapify-down, cascade-down, and extract-min/max)

## Priority Queue
* A data structure where each element has a priority
* Elements with higher priorities are served before elements with lower priorities
* Write a Min Binary Heap - lower number means higher priority.
Each Node has a val and a priority
  * Use the priority to build the heap
* Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority
* Dequeue method removes root element, returns it, and rearranges heap using priority

## MaxHeapify
* Converting an array into a MaxBinaryHeap
* Create a new heap
* Iterate over the array and invoke your insert function
return the values property on the heap

## Heapsort
* We can sort an array in O(n log n) time and O(1) space by making it a heap
* Make the array a max heap (use maxHeapify)
* Loop over the array, swap the root node with last item in the array
* After swapping each item, run maxHeapify again to find the next root node
* Next loop you'll swap the root node with the second-to-last item in the array and run maxHeapify again
* Once you've run out of items to swap, you have a sorted array

## Big O 0f Binary Heaps
* Insertion -   O(log N)
* Removal -   O(log N)
* Search -   O(N)

## RECAP
* Binary Heaps are very useful data structures for sorting, and implementing other data structures like priority queues
* Binary Heaps are either MaxBinaryHeaps or MinBinaryHeaps with parents either being smaller or larger than their children
* With just a little bit of math, we can represent heaps using arrays