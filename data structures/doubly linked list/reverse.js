// Create a variable called current and set it to be the head of the list
// Create a variable called tail and set it to be the head of the list
// Loop through the list and set the next property of the current node to be the prev property of the current node
// If there is no next property, set the tail to be the head and the head to be the current variable
// Return the list

//NOT FROM COURSE


reverse(){
  if(this.length === 0){
    return null;
  } else if(this.length > 1){
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    for(let i = 0; i < this.length; i++){
      prevNode  = currNode.prev;
      nextNode = currNode.next;

      if(prevNode === null){
        this.tail = currNode;
        currNode.next = null;
        currNode.prev = nextNode;
      } else if(nextNode === null){
        this.head = currNode;
        currNode.prev = null;
        currNode.next = prevNode;
      } else{
        currNode.next = prevNode;
        currNode.prev = nextNode;
      }
      currNode = nextNode;
    }
  }
  return this;
}
