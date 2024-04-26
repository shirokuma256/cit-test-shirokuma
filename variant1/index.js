// Write a function that takes a number and returns a string that is its equivalent in the Roman Numeral system.
function padNumber(number, width) {
    return String(number).padStart(width, ' ');
}

// Write a function that prints a multiplication table for numbers up to 12.
function multiplicationTable() {
    for (let i = 1; i <= 9; i++) {
      for (let j = 1; j <= 9; j++) {
        process.stdout.write(padNumber(i * j, 4))
        
      }
      console.log(``);
    }
  }
  
  multiplicationTable();