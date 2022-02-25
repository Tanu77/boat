var newUser = JSON.parse(localStorage.getItem("newUser")) || [];
// function radio (res){
// console.log(res)
// }
// radio()

function register() {
  var create_emails = document.getElementById("create_emails");
  var create_password = document.getElementById("create_password");
  var create_firstname = document.getElementById("create_firstname");
  var create_lastname = document.getElementById("create_lastname");

  var create_label_email = document.getElementById("create_label_email");
  var create_label_password = document.getElementById("create_label_password");
  var create_label_firstname = document.getElementById(
    "create_label_firstname"
  );
  var create_label_lastname = document.getElementById("create_label_lastname");
  var create_email_show = document.getElementById("create_email_show");
  var create_password_show = document.getElementById("create_password_show");
  var create_firstname_show = document.getElementById("create_firstname_show");
  var create_lastname_show = document.getElementById("create_lastname_show");

  if (create_emails.value == "") {
    create_emails.style.borderColor = "red";
    create_email_show.style.color = "red";
    create_label_email.style.color = "red";
    create_email_show.innerHTML = "Pls_Enter_An_Email";
  }
  if (create_emails.value !== "") {
    create_emails.style.borderColor = "rgb(143, 143, 143)";
    create_email_show.style.color = "white";
    create_label_email.style.color = "black";
    create_email_show.innerHTML = "";
  }
  if (create_password.value == "") {
    create_password.style.borderColor = "red";
    create_password_show.style.color = "red";
    create_label_password.style.color = "red";
    create_password_show.innerHTML = "Pls_Enter_A_Password";
  }

  if (create_password.value !== "") {
    create_password.style.borderColor = "rgb(143, 143, 143)";
    create_password_show.style.color = "white";
    create_label_password.style.color = "black";
    create_password_show.innerHTML = "";
  }

  if (create_firstname.value == "") {
    create_firstname.style.borderColor = "red";
    create_firstname_show.style.color = "red";
    create_label_firstname.style.color = "red";
    create_firstname_show.innerHTML = "Pls_Enter_A_FirstName";
  }

  if (create_firstname.value != "") {
    create_firstname.style.borderColor = "rgb(143, 143, 143)";
    create_firstname_show.style.color = "white";
    create_label_firstname.style.color = "black";
  }
  if (create_lastname.value == "") {
    create_lastname.style.borderColor = "red";
    create_lastname_show.style.color = "red";
    create_label_lastname.style.color = "red";
    create_lastname_show.innerHTML = "Pls_Enter_A_lastname";
  }
  if (create_lastname.value != "") {
    create_lastname.style.borderColor = "rgb(143, 143, 143)";
    create_lastname_show.style.color = "white";
    create_label_lastname.style.color = "black";
  }
  if (create_password.value != "") {
    var res = create_password.value;
    for (var i = 0; i < res.length; i++) {
      if (
        res[i] == "@" ||
        res[i] == "&" ||
        (res[i] == "#" && create_password.value.length > 8)
      ) {
        create_password.style.borderColor = "rgb(143, 143, 143)";
        create_label_password.style.color = "black";
        create_password_show.style.color = "white";

        var user = {
          email: create_emails.value,
          password: create_password.value,
          firstname: create_firstname.value,
          lastname: create_lastname.value,
        };

        newUser.push(user);
        localStorage.setItem("newUser", JSON.stringify(newUser));
        window.location.href="/singnin/signin.html";
        create_emails.value = "";
        create_password.value = "";
        create_firstname.value = "";
        create_lastname.value = "";
        break;
      }
      if (create_password.value.length < 8) {
        create_password.style.borderColor = "red";
        create_password_show.style.color = "red";
        create_label_password.style.color = "red";
        create_password_show.innerHTML = "character_must_be_at_least_8";
      } else {
        create_password.style.borderColor = "red";
        create_password_show.style.color = "red";
        create_label_password.style.color = "red";
        create_password_show.innerHTML = "Use_specaial_character_also_(@#&)";
      }
    }
  }
}
