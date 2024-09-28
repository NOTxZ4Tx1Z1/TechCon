// that is js file that check inputs of user with either patterns or (in case of age) if the value is big enough
function validateForm () {
    var emailInput = document.getElementById("email").value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!validRegex.test(emailInput)) {
        window.alert("Please, enter valid email");
        isValid = false;
        document.getElementById("email").style.borderColor = "red";
    } else {
        document.getElementById("email").style.borderColor = "#133e44";
    }
    if (isValid == true) {
        window.alert("Cmplaint succesfully submitted");
      }
      return  isValid;
}