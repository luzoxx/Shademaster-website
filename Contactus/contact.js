
var btnSub = document.querySelector(".btnmail")
var email = document.querySelector("#email")

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

btnSub.addEventListener('click', function(){
    ValidateEmail(email.value)
})