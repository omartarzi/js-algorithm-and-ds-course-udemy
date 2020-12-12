DFSInOrder(){
    var data = [];
    function traverse(node){
        if(node.left) traverse(node.left);
        data.push(node.value);
        if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
}


//      10
//   6     15
// 3  8      20

[3, 6, 8, 10, 15, 20]