// remove from the beginning (what was first brought in)
dequeue(){
    if(!this.first) return null;

    var temp = this.first;
    if(this.first === this.last) {
        this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
}