const passwordBox = document.getElementById("password")
const length = 10;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789";
const specialchars  = "@#$%^&*()_+~|}{[]<>/-=";

const allchars = uppercase + lowercase + number + specialchars;

function generatepassword(){
    let password ="";
    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += specialchars[Math.floor(Math.random()*specialchars.length)];

    while (length>password.length) {
        password += allchars[Math.floor(Math.random()*allchars.length)];
    }
passwordBox.value = password;


function copyPassword(){
    passwordBox.ariaSelected();
    document.execCommand("copy");
}

}