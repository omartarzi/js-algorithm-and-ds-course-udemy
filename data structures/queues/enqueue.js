// add to the end (tail)
enqueue(val){
    var newNode = new Node(val);
    if(!this.first){
        this.first = newNode;
        this.last = newNode;
    } else {
        this.last.next = newNode;
        this.last = newNode;
    }
    return ++this.size;
}