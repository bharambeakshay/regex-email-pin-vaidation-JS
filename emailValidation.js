const readline = require('readline-sync');
//email format- abc.xyz@bridgelabz.co.in .xyz & .in optional & rest all mandatory
//uc1 validating first part of the email i.e. abc
//uc2 changing email pattern for validating second part i.e. @bridgelabs, akshay@bridgelabz
let emailRegex = RegExp("^[A-Za-z]{3,}[@][A-Za-z0-9]{1,}$")
function EmailValidation(email) {
    if (emailRegex.test(email)) {
        console.log(email + "  is in valid format");
        return true;
    }
    else throw "Incorect Email Format";
}
try {
    let email = readline.question(" Please Enter the email for validation: ");
    EmailValidation(email);
}
catch (e) {
    console.log(e);
}