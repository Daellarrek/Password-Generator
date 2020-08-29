// Constants
const generateBtn = document.querySelector("#generate");
// Functions


/**
 * writes a generated password to the #password
 */
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/**
 * generate a password based on certain criteria
 */
function generatePassword(){

  // Password is currently blank! We need to make a better one
  let password = "";
  
  {var length = window.prompt("Choose password length: 8-128 characters.");
  
  }
  var lowercase = window.prompt("Do you want lowercase characters?");
  var uppercase = window.prompt("Do you want uppercase characters?");
  var numbers = window.prompt("Do you want numeric characters?");
  var symbols = window.prompt("Do you want special characters");

  
  

  return password;
}


// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

