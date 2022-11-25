let height = 5;
let payload = "";
for(let i=1; i <= height; i++){
  for(let j = 1; j < height-i; j++){
       payload += " ";
  }  
  for(let k = 0; k < 2*i-1; k++){
    payload += "*";
  }
  payload += "\n";
}
console.log(payload)
