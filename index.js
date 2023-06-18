document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var nameValue = document.getElementById("name").value;
    var emailValue = document.getElementById("email").value;
    var phoneValue = document.getElementById("phone").value;
    var datetimeValue = document.getElementById("datetime").value;

    console.log("Name: " + nameValue);
    console.log("Email: " + emailValue);
    console.log("Phone: " + phoneValue);
    console.log("Date and Time: " + datetimeValue);
    document.getElementById("myForm").reset();
});