const fs = require('node:fs/promises');

async function readInput(){
  let pastInt = null;
  let incCount = 0;
  const file = await fs.open('input.txt');
  for await (let line of file.readLines()){
    if(pastInt == null){
      //do nothing
    }else{
      if(parseInt(line) > pastInt){
        incCount ++;
      }
    }
    pastInt = parseInt(line);
  }
  console.log(incCount);
}

readInput();