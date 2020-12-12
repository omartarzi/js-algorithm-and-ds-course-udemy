DFSPostOrder(){
    var data = [];
    function traverse(node){
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        data.push(node.value);
    }
    traverse(this.root);
    return data;
}


//      10
//   6     15
// 3  8      20

[3, 8, 6, 20, 15, 10]