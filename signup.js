

document.querySelector("#form").addEventListener("submit",formSubmit);
var Arr = JSON.parse(localStorage.getItem("sighup")) || [] ;
function formSubmit(event) {
    event.preventDefault();
    var first = document.querySelector("#firstname").value;
    var last = document.querySelector("#lastname").value;
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#pass").value;
    var confirmpass = document.querySelector("#confirmpass").value;
    //console.log(first, last, email, pass, confirmpass);
    
    var formObj = {
        first: first,
        last: last,
        email: email,
        pass: pass,
        confirmpass: confirmpass,
    }
    //console.log(formObj);
    Arr.push(formObj);
    //console.log(Arr);
    localStorage.setItem("signup",JSON.stringify(Arr));
}



