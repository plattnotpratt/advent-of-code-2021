const fs = require('node:fs/promises');

async function readInput(){
  let data = [];
  const file = await fs.open('input.txt');
  for await (let line of file.readLines()){
    let command = line.split(' ');
    command[1] = parseInt(command[1]);
    data.push(command);
  }
  return data;
}
function determinPosition(data){
  let result = [0,0];
  let aim = 0;
  for(let i = 0; i < data.length; i++){
    const command = data[i];
    console.log(command);
    if(command[0] == "forward"){
      result[0] += command[1];
      result[1] += aim * command[1];
    }else if(command[0] == 'up'){
      aim -= command[1];
    }else{
      //down
      aim += command[1];
    }
  }

  return result;
}
async function init(){
  const data = await readInput();
  const result = determinPosition(data);
  console.log(result[0] * result[1]);

}
init();