


var regadusers = JSON.parse(localStorage.getItem("signup"));
console.log(regadusers);
document.querySelector("#form").addEventListener("submit", formSubmit);

var form = document.querySelector("#form");

function formSubmit(event) {
    event.preventDefault();

    var user = document.querySelector("#user").value;
    var pass = document.querySelector("#pass").value;
    console.log(user, pass);
        document.querySelector("button[type='submit']").addEventListener("click", function () {
        window.location.href = "Home.html";
    });

}




