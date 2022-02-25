
  var userData = JSON.parse(localStorage.getItem("newUser")) || [];

  
  // console.log(userData);
  function submit() {
    var login_input_email = document.getElementById("login_input_email");
    var login_input_password = document.getElementById("login_input_password");

    var label = document.getElementById("label");
    var label2 = document.getElementById("label2");
    var show = document.getElementById("show");
    var show2 = document.getElementById("show2");

    if (login_input_email.value == "") {
      login_input_email.style.borderColor = "red";
      show.innerHTML = "Please enter your email";
      show.style.color = "red";
      label.style.color = "red";
    }
    if (login_input_password.value == "") {
      login_input_password.style.borderColor = "red";
      show2.innerHTML = "Please enter your password";
      show2.style.color = "red";
      label2.style.color = "red";
    } else {
      userData.map(function (element) {
        // console.log(element.email)
        // console.log(typeof login_input_email.value);

        if (element.email != login_input_email.value) {
          // console.log('moin')

          login_input_email.style.borderColor = "red";
          show.style.color = "red";
          show.innerHTML = "Email doesn't match";
          label.style.color = "red";
        }
        if (element.password != login_input_password.value) {
          login_input_password.style.borderColor = "red";
          show2.innerHTML = "Password doesn't match";
          show2.style.color = "red";
          label2.style.color = "red";
        }
        if (element.email == login_input_email.value) {
          login_input_email.style.borderColor = "rgb(143, 143, 143)";
          show.style.color = "white";
          show.innerHTML = "";
          label.style.color = "black";
        }
        if (element.password == login_input_password.value) {
          login_input_password.style.borderColor = "rgb(143, 143, 143)";
          show2.style.color = "white";
          show2.innerHTML = "";
          label2.style.color = "black";
        }
        if (
          element.email == login_input_email.value &&
          element.password == login_input_password.value
        ) {
          location.href = "/home1/home.html";
          console.log("moin");
        }

      });
    }
    login_input_email.value = ''
    login_input_password.value = ''

  }
  // console.log(userData)
