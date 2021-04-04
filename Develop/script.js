// Assignment code here
function genCriteria() {
  //password length
  var passwordLength = window.prompt("How many characters would you like your password? Please enter a number between 8 and 128."); {
    
  if (passwordLength === "" || passwordLength === null || passwordLength <8 || passwordLength > 128) {
    window.alert("Please enter a number between 8 and 128.");
    return genCriteria();
  }
  else {
    window.confirm("Your password will be " + passwordLength + " characters long.");
    break;
  }
};

    //lowercase/uppercase
    var lowercase = window.prompt("Would you like to include both lowercase and uppercase letters? Please enter 'yes' or 'no'."); {
    lowercase = lowercase.toLowerCase
    if (lowercase === "yes") {
      window.alert("Your password will contain both lowercase and uppercase letters.");
    }
    else (lowercase === "no") {
      window.prompt("Would you like only lowercase letters? Please enter 'yes' or 'no'.");
      break;
    }
  }
}
};


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
