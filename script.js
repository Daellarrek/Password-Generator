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
function generatePassword() {

  let lower = "abcdefghijklmnopqrstuvwxyz"
  let lowerArr = lower.split("");
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let upperArr = upper.split("");
  let num = "0123456789";
  let numArr = num.split("");
  let spec = "!@#$%^&*()_+?<>";
  let specArr = spec.split("");
  let allChars = [];

  // Password is currently blank! We need to make a better one
  let password = "";

  let pwlength = prompt("Choose password length: 8-128 characters.");

  if (pwlength < 8 || pwlength > 128) {
    alert("Password must be between defined length.")
    generatePassword()
  }

  if (confirm("Do you want lowercase characters?")) {
    allChars.push(lowerArr);
  }

  if (confirm("Do you want uppercase characters?")) {
    allChars.push(upperArr);
  }

  if (confirm("Do you wamt numeric characters?")) {
    allChars.push(numArr);
  }

  if (confirm("Do you want special characters?")) {
    allChars.push(specArr);
  }

  if (allChars.length === 0) {
    alert("Minimum of one type of character must be chosen");
    generatePassword()
  }

  for (let i = 0; i < pwlength.length; ++i) {
    let random = Math.floor(Math.random().pwlength);
    password = allChars[random];
  }

  return password;
}


// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

