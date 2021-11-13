// Assignment code here
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var speacialChars = ["`", "`", "!", "@", "#", "$", "%", "^", "&", "*", "+", "?"];
var password = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePasswordLength () {
  // window prompt to set length
  var password = window.prompt("How many many characters will be in the password?")
    if (password > 7 && password < 129) { 
      console.log (password);
     //generate password function
     
       for (var i=0;i<password.length; i++ ){
         console.log(password)
       }
     }
  
     // try again
    else {
      window.alert("Please enter a valid number between 8 and 128")
      return generatePasswordLength();
    
    }
  
   
  // window confirm to set lower case type
  var caseTypeLower = window.confirm("Include lower case?")
  console.log (caseTypeLower);
   
  // window confirm to set upper case type
  var caseTypeUpper = window.confirm("Include upper case?")
  console.log (caseTypeUpper);
  // window confirm to set special char allowance
  var specialChar = window.confirm("Include special characters?")
  console.log (specialChar);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
