* A LIFO data structure!
  * The first thing added in is the last thing to be removed
  * The last thing added in is the first thing to be removed
* The last element added to the stack will be the first element removed from the stack

## Arrays
* Push and pop work in tandem
* Shift and unshift work in tandem

* Think about a stack of plates, or a stack of markers, or a stack of....anything.
* As you pile it up the last thing (or the topmost thing) is what gets removed first.

* Where stacks are used
  * Managing function invocations
  * Undo / Redo
  * Routing (the history object) is treated like a stack!

## Big O
* Insertion -   O(1)
* Removal -   O(1)
* Searching -   O(N)
* Access -   O(N)

* Stacks are a LIFO data structure where the last value in is always the first one out.
* Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing (remember pages you have visited and go back/forward) and much more!
* They are not a built in data structure in JavaScript, but are relatively simple to implement
* Insert and remove are both O(1)