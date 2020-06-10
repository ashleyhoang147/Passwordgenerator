// generate random password
function generate(){
//password length is random between 8 to 128
min = 8
max = 128
let passlenghth = function getRandomArbitrary(min, max) 
    {return Math.random() * (max - min) + min;}
