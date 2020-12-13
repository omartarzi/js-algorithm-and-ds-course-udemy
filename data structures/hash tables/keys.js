// Loops through the hash table array and returns an array of keys in the table

keys(){
  let keysArr = [];
  for(let i = 0; i < this.keyMap.length; i++){
    if(this.keyMap[i]){
      for(let j = 0; j < this.keyMap[i].length; j++){
        if(!keysArr.includes(this.keyMap[i][j][0])){
          keysArr.push(this.keyMap[i][j][0])
        }
      }
    }
  }
  return keysArr;
}

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
ht.set("purple","#DDA0DD")
ht.set("violet","#DDA0DD")


ht.keys().forEach(function(key){
  console.log(ht.get(key));
})