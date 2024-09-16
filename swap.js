
let num1 = 3;
let num2 = 10;

let temp = num1;
num1 = num2;
num2 = temp;

console.log(num1, num2); 


let num3 = 3;
let num4 = 10;

num3 = num3 + num4;
num4 = num3 - num4;
num3 = num3 - num4;

console.log(num3, num4); 


let num5 = 3;
let num6 = 10;

num5 = num5 ^ num6;
num6 = num5 ^ num6;
num5 = num5 ^ num6;

console.log(num5, num6); 


let num7 = 3;
let num8 = 10;

[num7, num8] = [num8, num7];

console.log(num7, num8); 


function swap(a, b) {
  return [b, a];
}

let num9 = 3;
let num10 = 10;

[num9, num10] = swap(num9, num10);

console.log(num9, num10); 

