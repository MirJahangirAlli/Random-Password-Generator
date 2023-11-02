const passBox=document.getElementById("pass");
const length=12;

const upCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const loCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="!@#$%^&*~()+=<>?/";

const allChar=upCase+loCase+number+symbol;

const createPassword=()=>{
    let password="";

    // one Uppercase letter will pic randomly 
    password+=upCase[Math.floor(Math.random() * upCase.length)];
    // one Lowercase letter will pic randomly 
    password+=loCase[Math.floor(Math.random() * loCase.length)];
    // one number will pic randomly 
    password+=number[Math.floor(Math.random() * number.length)];
    // one symbol will pic randomly 
    password+=symbol[Math.floor(Math.random() * symbol.length)];

    // check if length is greater than password length then add random number from allChar variable
    while(length>password.length){
        password+=allChar[Math.floor(Math.random() * allChar.length)];
    }

    // show the value in input box
    passBox.value=password;
}

const copyPassword=()=>{
    passBox.select();
    document.execCommand("copy");
}
const resetPassword=()=>{
    passBox.value='';
}