const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function () {
  const userEmailField = document.getElementById("user-email");
  const userPassField = document.getElementById("user-pass");

  userEmailValue = userEmailField.value;
  userPassValue = userPassField.value;

  if (userEmailValue == "sadia@gmail.com" && userPassValue == "sadia") {
    window.location.href = "banking.html";
  } else {
    alert("Wrong email or password");
  }
});
