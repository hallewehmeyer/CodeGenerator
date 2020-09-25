// Assignment Code
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var num = [1,2,3,4,5,6,7,8,9,10];
var spec = ["1","@","#","*","%","^","&","$","?","/","<",">","{","}","[","]",":",";","+","-","=","~"];
var characterIndex = []
function generatePassword() {
  let pass = ''
  alert("Password must be more than 8 characters and less than 128 characters.");
  var length = prompt("How long would you like your new password to be?");
  if (length < 8 || length > 128){
    alert("Password must be more than 8 characters less than 128 characters");
  var length = prompt("Password must be more than 8 characters and less than 128 characters. How long would you like your password to be?");
  if (length < 8 || length > 128){
    alert("ERROR: Password is too short, refresh page and try again please!")
      return
  }};

  var wantsLower = confirm("Do you want lower case letters?");
    if (wantsLower){
      for (let i = 0; i<lower.length; i++){
      characterIndex.push(lower[i])
  }};

  var wantsUpper = confirm("Do you want upper case letters?");
    if (wantsUpper){
      for (let i = 0; i< upper.length; i++){
      characterIndex.push(upper[i])
  }};

  var wantsNum = confirm("Do you want numbers?");
    if (wantsNum){
      for (let i = 0; i< num.length; i++){
      characterIndex.push(num[i])
  }};

  var wantsSpec = confirm("Do you want numbers?");
    if (wantsSpec){
      for (let i= 0; i< spec.length; i++){
      characterIndex.push (spec[i])
  }};
  
  for (let i =0; i < length; i++) {
      let nextChar = characterIndex[Math.floor(Math.random() * characterIndex.length)];
      pass += nextChar;
  }
  return pass
}
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
