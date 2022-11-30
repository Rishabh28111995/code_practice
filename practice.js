let height = 5;
let srting = "";
for (let i = 0; i < 5; i++) {
for (let j = 1; j < height-i; j++){
    string += " ";
}
for (let k = 0; k < 2*i-1; k++){
    string += "*";
}
    string += (/n);
}
console.log(string)