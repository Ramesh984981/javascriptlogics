// function isPrime(num) {
//     // Handle base cases
//     if (num <= 1) return false; // 0 and 1 are not prime numbers
//     if (num <= 3) return true; // 2 and 3 are prime numbers
  
//     // Check divisibility by 2 and 3
//     if (num % 2 === 0 || num % 3 === 0) return false;
  
//     // Check divisibility from 5 to square root of num
//     // Only check i and i+2 (i.e., 5, 7, 11, 13, 17, 19, ...)
//     for (let i = 5; i * i <= num; i += 6) {
//       if (num % i === 0 || num % (i + 2) === 0) return false;
//     }
  
//     // If no factors found, num is prime
//     return true;
//   }
  
//   // Example usage
//   console.log(isPrime(5)); // true
//   console.log(isPrime(10)); // false
  
  
  

function isPrime(num) {
  if (num <= 1) return false; 
  if (num <= 3) return true; 

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

console.log(isPrime(20)); 
console.log(isPrime(30));


