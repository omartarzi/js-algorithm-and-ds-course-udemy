// Loops through the hash table array and returns an array of values in the table

values(){
  let valuesArr = [];
  for(let i = 0; i < this.keyMap.length; i++){
    if(this.keyMap[i]){
      for(let j = 0; j < this.keyMap[i].length; j++){
        if(!valuesArr.includes(this.keyMap[i][j][1])){
          valuesArr.push(this.keyMap[i][j][1])
        }
      }
    }
  }
  return valuesArr;
}