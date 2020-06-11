// generate random password
function generate(){
//password length is random between 8 to 128
var min = 8;
var max = 129;
let passlength = Math. floor (Math.random() * (max - min) + min);

//let passlength = 10;
//available values for password inputs
let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let password =""
//loop for password generating
for(var i = 0; i <= passlength; i++){
    password = password + values.charAt(Math.floor(Math.random()*Math.floor(values.length - 1)));
}
//add the password generated to the text box
document.getElementById("generatedpassword").value = password;

}
//copy password to clipboard
function copypassword()
{
    document.getElementById("generatedpassword").select();
    document.execCommand("Copy");
    alert("Your password is copied to clipboard");
}