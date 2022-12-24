const fs = require('node:fs/promises');

async function readInput(){
  let data = [];
  const file = await fs.open('input.txt');
  for await (let line of file.readLines()){
    data.push(Array.from(line));
  }
  return data;
}

function getGreater(data, bit){
  let ones = [];
  let zeros = [];
  for(let i = 0; i < data.length; i++){
    if(data[i][bit] == '1'){
      ones.push(data[i]);
    }else{
      zeros.push(data[i]);
    }
  }
  if(ones.length >= zeros.length){
    return ones;
  }else{
    return zeros;
  }
}
function getLesser(data, bit){
  let ones = [];
  let zeros = [];
  for(let i = 0; i < data.length; i++){
    if(data[i][bit] == '1'){
      ones.push(data[i]);
    }else{
      zeros.push(data[i]);
    }
  }
  if(ones.length >= zeros.length){
    return zeros;
  }else{
    return ones;
  }
}
function getOxGen(data){
  let bit = 0;
  while(data.length > 1){
    //console.log(data.length);
    data = getGreater(data, bit);
    if(bit >= data[0].length){
      bit = 0;
    }else{
      bit ++;
    }
  }
  //console.log(data[0]);
  return parseInt(data[0].join(""), 2);
}

function getCO2Scrub(data){
  let bit = 0;
  while(data.length > 1){
    //console.log(data.length);
    data = getLesser(data, bit);
    if(bit >= data[0].length){
      bit = 0;
    }else{
      bit ++;
    }
    
    
    console.log(data);
  }
  console.log(parseInt(data[0].join(""), 2));
  return parseInt(data[0].join(""), 2);
}

async function init(){

  const data = await readInput();
  let Co2Val = getCO2Scrub(data);
  let oxGenVal = getOxGen(data);
  //console.log(Co2Val);
  console.log(Co2Val * oxGenVal);
}
init();