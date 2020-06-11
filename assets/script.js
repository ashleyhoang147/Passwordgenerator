// generate random password
function generate(){
//password length is random between 8 to 128
min = 8
max = 128
let passlength = function getRandomArbitrary(min, max) 
    {return Math.random() * (max - min) + min;}
//available values for password inputs
let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let password =""
//loop for password generating
for(var i = 0; i <= passlength; i++){
    password = password + values.charAt(Math.floor(Math.random()*Math.floor(values.length - 1)));
}
}