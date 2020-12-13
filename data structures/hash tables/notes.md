## What is a hash table
* Hash tables are used to store key-value pairs.
* They are like arrays, but the keys are not ordered.
* Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values
* Nearly every programming language has some sort of hash table data structure
* Because of their speed, hash tables are very commonly used
* Python has Dictionaries; JS has Objects and Maps; Java, Go, & Scala have Maps;Ruby has...Hashes
* In order to look up values by key, we need a way to convert keys into valid array indices
* A function that performs this task is called a hash function

## What makes a good hash table
1. Fast (i.e. constant time)
2. Doesn't cluster outputs at specific indices, but distributes uniformly
3. Deterministic (same input yields same output)

### Prime Numbers
* The prime number in the hash is helpful in spreading out the keys more uniformly
* It's also helpful if the array that you're putting values into has a prime length

## Collisions
* Even with a large array and a great hash function, collisions are inevitable
* There are many strategies for dealing with collisions, but we'll focus on two:
1. Separate Chaining
  * With separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list)
  *  This allows us to store multiple key-value pairs at the same index
2. Linear Probing
  * With linear probing, when we find a collision, we search through the array to find the next empty slot
  * Unlike with separate chaining, this allows us to store a single key-value at each index

## Big O of Hash Tables
* Insert: O(1)
* Deletion: O(1)
* Access: O(1)

## RECAP
* Hash tables are collections of key-value pairs
* Hash tables can find values quickly given a key
* Hash tables can add new key-values quickly
* Hash tables store data in a large array, and work by hashing the keys
* A good hash should be fast, distribute keys uniformly, and be deterministic
* Separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index
* When in doubt, use a hash table!