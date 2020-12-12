## RECAP
* Trees are non-linear data structures that contain a root and child nodes
* Binary Trees can have values of any type, but at most two children for each parent
* Binary Search Trees are a more specific version of binary trees where every node to the left of a parent is less than it's value and every node to the right is greater
* We can search through Trees using BFS and DFS
* Removing a node in a BST can be tough
  * If the node has no children, it is not a problem
  * If the node has one child, it has one problem
  * The more chilldren the node has, the more problems it will have
* Time complexity of BFS and DFS is the same (every node is visited)
* Space complexity
  * BFS could use a lot more space on a wide tree
  * DFS only keeps track of nodes in a given branch

## Breadth First
* Lots of nodes to keep track of!

## Depth First
* Fewer nodes to keep track of
* IN ORDER
  * Used commonly with BST's
  * Notice we get all nodes in the tree in their underlying order
* PRE ORDER
  * Can be used to "export" a tree structure so that it is easily reconstructed or copied