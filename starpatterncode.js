let height = 5;
let payload = "";
for(let i=1; i < 5; i++){
  for(let j = 1; j < height-i; j++){
       payload += "";
  }  
  for(let k = 1; k < 2*i-1; k++){
    payload += "*";
  }
  payload += "\height";
}
console.log(payload)