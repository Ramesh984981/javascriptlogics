
function isPrime(num) {
    if (num < 2) return false; 
    for (let j = 2; j <= Math.sqrt(num); j++) {
        if (num % j === 0) return false; 
    }
    return true; 
}


const lowerNumber = parseInt(prompt('Enter lower number: '));
const higherNumber = parseInt(prompt('Enter higher number: '));

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);


for (let i = lowerNumber; i <= higherNumber; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}
