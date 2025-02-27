// Assignment code here
const available_characters = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: "!@#$%^&*()_+};:?-><",
};

function generatePassword() {
  var passwordCharSet = "";

  var length = window.prompt("Enter a number from 8 to 128 for password length.");
  if (length < 8) {
    alert("Must be between 8 and 128.")
    return;
  }
  else if (length > 128) {
    alert("Must be between 8 and 128.")
  return;
  }

  var lowercase = window.confirm("Would you like password to include lowercase letters? If yes press 'ok', if no press 'cancel'.");
  if (lowercase) {
    passwordCharSet += available_characters.lowercase;
  };

  var uppercase = window.confirm("Would you like password to include uppercase letters? If yes press 'ok', if no press 'cancel'.");
  if (uppercase) {
    passwordCharSet += available_characters.uppercase;
  };

  var symbols = window.confirm("Would you like password to include symbols? If yes press 'ok', if no press 'cancel'.");
  if (symbols) {
    passwordCharSet += available_characters.symbol;
  };

  var numbers = window.confirm("Would you like password to include numbers? If yes press 'ok', if no press 'cancel'.");
  if (numbers) {
    passwordCharSet += available_characters.number;
  };
  
  var password = "";
  for (var i = 0; i < length; i++) {
    password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }
  return password;
}
writePassword();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
