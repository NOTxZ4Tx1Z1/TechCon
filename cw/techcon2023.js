


let scale = 1; // Initial scale

document.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;
    let mainSection = document.getElementById('main-content');
    let mainSectionTop = mainSection.offsetTop;

    // Calculate the scale based on the scroll position
    scale = 1 - (scrollPosition - (mainSectionTop - window.innerHeight / 2)) * 0.001;

    // Limit the scale to a range (0.7 to 1.4)
    scale = Math.min(Math.max(scale, 0.7), 1.4);

    // Set the background size directly
    document.querySelector('.mainpage').style.backgroundSize = 'calc(' + (100 + scale * 40) + '%)';
});

// that is function that takes input as varibale and than 
// either compares with pattern or check if value is suitable (in case of age, check if dat e of birth is suitable)
function validateForm () {
    var ageInput = new Date(document.getElementById("age").value);
    var currentDate = new Date();
    var age = currentDate.getFullYear() - ageInput.getFullYear();
    var emailInput = document.getElementById("email").value;
    var postcodeInput = document.getElementById("postcode").value;
    var phoneInput = document.getElementById("phone").value;
    var isValid = true;
    // patterns for email postcode and phone number
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var ukPostcodePattern = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;
    var phonenumberpattern = /^(\+44|0)\s?[1-9]\d{9}$/;
    if (age < 18) {
      window.alert("You have to be over 18");
      isValid = false;
      document.getElementById("age").style.borderColor = "red";
    } else {
      document.getElementById("age").style.borderColor = "#133e44";
    }
    if (!validRegex.test(emailInput)) {
      window.alert("Please, enter valid email");
      isValid = false;
      document.getElementById("email").style.borderColor = "red";
    } else {
      document.getElementById("email").style.borderColor = "#133e44";
    }
    if (!ukPostcodePattern.test(postcodeInput)) {
      window.alert("Please enter valid postcode");
      isValid = false;
      document.getElementById("postcode").style.borderColor = "red";
    } else {
      document.getElementById("postcode").style.borderColor = "#133e44";
    }
    if (!phonenumberpattern.test(phoneInput)) {
      window.alert("Please, enter valid phone number");
      isValid = false;
      document.getElementById("phone").style.borderColor = "red";
    } else {
      document.getElementById("phone").style.borderColor = "#133e44";
    }
    if (isValid == true) {
      window.alert("Form succesfully submitted");
    }
    return  isValid;
};

// fucntion for help button (onclick event)
function helpmeButton () {
  window.alert("Please insert information that is required, or if you have a problem, please go to 'CONTACT' section and contact our operator");
};




