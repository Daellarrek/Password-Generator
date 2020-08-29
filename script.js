// Constants
const generateBtn = document.querySelector("#generate");
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const lowercaseArray = [lowerCase]
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const uppercaseArray = [upperCase]
const num = "0123456789"
const numArray = [num]
const specChar = "!@#$%^&*()_+?<>"
const speccharArray = [specChar]
const allChars = []
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
  
  let length = prompt("Choose password length: 8-128 characters.");

  if (length < 8 || length > 128){
    alert("Password must be between defined length.")
    generatePassword()
  }

  let lowercase = confirm("Do you want lowercase characters?");

  let uppercase = confirm("Do you want uppercase characters?");

  let numbers = confirm("Do you want numeric characters?");

  let special = confirm("Do you want special characters");

  


  return password;
}


// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

