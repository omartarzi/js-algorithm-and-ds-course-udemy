* if data is mostly sorted
  * BUBBLE sort is good
    * iterate over then do a check at the end then you're done
  * INSERTION sort is also good because you only iterate once
  * SELECTION not good because you have to iterate all the way through to find the smallest

* space complexity for all of them is O(n)

* INSERTION is good when you have it pre sorted and need to add in a new value

* the three are all roughly the same
* average time complexity is quadratic O(n^2)
* can perform better in smaller data sets


## MERGE, QUICK, and RADIX

* Merge sort and quick sort are standard efficient sorting algorithms
* Quick sort can be slow in the worst case, but is comparable to merge sort on average
* Merge sort takes up more memory because it creates a new array (in-place merge sorts exist, but they are really complex!)
* Radix sort is a fast sorting algorithm for numbers
* Radix sort exploits place value to sort numbers in linear time (for a fixed number of digits)

