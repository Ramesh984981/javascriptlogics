function isArmstrongNumber(num) {
   
    const numStr = num.toString();
    

    const numDigits = numStr.length;
    
    // Initialize a sum variable to hold the sum of each digit raised to the power of numDigits
    let sum = 0;
    
    // Iterate over each digit in the number
    for (let digit of numStr) {
        // Convert the digit back to a number and raise it to the power of numDigits
        sum += Math.pow(parseInt(digit), numDigits);
    }
    
    // Check if the sum is equal to the original number
    return sum === num;
}

// Example usage:
console.log(isArmstrongNumber(153));  // Output: true
console.log(isArmstrongNumber(123));  // Output: false
