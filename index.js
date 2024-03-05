// Helper function to calculate the factorial of a number
function calculateFactorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * calculateFactorial(number - 1);
    }
  }
  
  // Example of usage:
  const factorialNumber = 5;
  const factorialResult = calculateFactorial(factorialNumber);
  console.log(`The factorial of ${factorialNumber} is: ${factorialResult}`);
  