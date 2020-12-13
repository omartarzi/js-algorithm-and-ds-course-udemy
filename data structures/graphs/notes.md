* A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph
* In short, a graph is a collection of nodes and connections between those nodes

## Uses
* Social Networks
* Location / Mapping
* Routing Algorithms
* Visual Hierarchy
* File System Optimizations
* EVERYWHERE!

## Terminology
* Vertex - a node
* Edge - connection between nodes
* Weighted/Unweighted - values assigned to distances between vertices
* Directed/Undirected - directions assigned to distanced between vertices

## Adjacency List
* Can take up less space (in sparse graphs)
* Faster to iterate over all edges
* Can be slower to lookup specific edge
* Most data in the real-world tends to lend itself to sparser and/or larger graphs

## Adjacency Matrix
* Takes up more space (in sparse graphs)
* Slower to iterate over all edges
* Faster to lookup specific edge