remove(index){
    if(index < 0 || index >= this.length) return false;
    if(index === 0) return this.shift(val);
    if(index === this.length - 1) return this.pop(val);

    var removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
}

// cleaner

remove(index){
    if(index < 0 || index >= this.length) return false;
    if(index === 0) return this.shift(val);
    if(index === this.length - 1) return this.pop(val);

    var removedNode = this.get(index);
    var beforeNode = removedNode.prev;
    var afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
}