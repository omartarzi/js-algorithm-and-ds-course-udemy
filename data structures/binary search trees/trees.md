* A data structure that consists of nodes in a parent / child relationship
* Lists - linear
* Trees - nonlinear
* There can only be ONE root

## Terminology
* Root - The top node in a tree.
* Child - A node directly connected to another node when moving away from the Root.
* Parent - The converse notion of a child.
* Siblings - A group of nodes with the same parent.
* Leaf - A node with no children.
* Edge - The connection between one node and another.

## Tree Applications
* HTML DOM
* Network Routing
* Abstract Syntax Tree
  * Describing syntax for a language
* Artificial Intelligence
* Folders in Operating Systems
* Computer File Systems

## How binary search trees they work
* Every parent node has at most two children
* Every node to the left of a parent node is always less than the parent
* Every node to the right of a parent node is always greater than the parent

## Big O of BST
* Insertion - O(log n)
* Searching - O(log n)
* NOT GUARANTEED
  * Would be O(n) if the tree was entirely one sided (so basically a linked list)