const fs = require('node:fs/promises');

async function readInput(){
  let data = [];
  const file = await fs.open('input.txt');
  for await (let line of file.readLines()){
    data.push(parseInt(line));
  }
  return data;
}

async function init(){
  const data = await readInput();
  let incCount = 0;
  for(let i = 0; i < data.length; i++){
    if(data[i+3] != undefined){
      const sumA = data[i] + data[i+1] + data[i+2];
      const sumB = data[i+1] + data[i+2] + data[i+3];
      if(sumB > sumA){
        incCount++;
      }
    }
  }
  console.log(incCount);
}
init()