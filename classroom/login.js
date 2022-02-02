function valid(){
    var a = document.getElementById('un').value;
    var b = document.getElementById('pwd').value;
    var c = document.getElementById('btd').innerHTML ="SUBMIT HAS BEEN SUCCSESSFULLY";
if (a == "" ) {
document.getElementById('errum').innerHTML =" please enter username ";
}
else if(a!=="xyz20@gnu.ac.in") {
document.getElementById('errum').innerHTML ="please enter use name correct";
}
else{
    document.getElementById('errum').innerHTML=""
}


if (b == "") {
document.getElementById('errpwd').innerHTML ="please enter your passsword";
}
else { 
document.getElementById('errpwd').innerHTML ="";
}
}
function chkpwd(){
var b = document.getElementById('pwd').value;
var c=b.length;
if (c<=3){
document.getElementById('errpwd').innerHTML ="weak password";
document.getElementById('errpwd').style.color="red";
}  
else if (c=>4 && c<=8){
document.getElementById('errpwd').innerHTML ="strong password";
document.getElementById('errpwd').style.color="orange";
}  
else{
document.getElementById('errpwd').innerHTML =" very strong password";
document.getElementById('errpwd').style.color="green";
}  
}
function hello(){alert("welcome to classroom")}

function validate_form() 
{
    if(document.form.Firstname.value=="")
    {
        alert("Enter first name ");
        return false;
    }
    if(document.form.lastname.value=="")
    {
        alert("Enter Last name");
        return false;
    }
    if(document.form.Birth.value=="")
    
    {
        alert("Enter birth date");
        return false;
    }
    if(document.form.email.value=="")
    {
        alert("Enter Email Address");
        return false;
    }
    if(document.form.password.value=="")
    {
        alert("Enter password");
        return false;
    }
    if(document.form.contact.value=="")
    {
        alert("Enter contact number");
        return false;
    }






}