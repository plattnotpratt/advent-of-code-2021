const fs = require('node:fs/promises');

async function readInput(){
  let data = [];
  const file = await fs.open('input.txt');
  for await (let line of file.readLines()){
    data.push(Array.from(line));
  }
  return data;
}

async function init(){
  let ones = [0,0,0,0,0,0,0,0,0,0,0,0];
  let zeros = [0,0,0,0,0,0,0,0,0,0,0,0];
  let gama = '';
  let epsilon = '';
  const data = await readInput();
  for(let i = 0; i < data.length; i++){
    for(let k = 0; k < data[i].length; k++){
      if(data[i][k] == '1'){
        ones[k] ++;
      }else{
        zeros[k] ++
      }
    }
  }
  for(let i = 0; i < ones.length; i++){
    if(ones[i] > zeros[i]){
      gama += '1';
      epsilon += '0';
    }else{
      gama += '0';
      epsilon += '1';
    }
  }
  console.log(gama, epsilon, ones, zeros);
  console.log(parseInt(gama, 2)* parseInt(epsilon, 2));
}
init();