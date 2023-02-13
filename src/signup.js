window.onload = () => {
  main();
};

function main() {
  document.querySelector("#submit").addEventListener("click", (e) => {
    userValidation(e);
  });
}
const userValidation = (e) => {
  e.preventDefault();
  const firstName = document.querySelector("#firstName").value,
    lastName = document.querySelector("#lastName").value,
    email = document.querySelector("#email").value,
    password = document.querySelector("#password").value,
    checkBox = document.querySelector("#checkBox"),
    confirmPassword = document.querySelector("#confirmPassword").value;

  if (
    password !== "" &&
    confirmPassword !== "" &&
    password === confirmPassword &&
    checkBox.checked &&
    firstName !== "" &&
    lastName !== ""
  ) {
    let person = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    window.localStorage.setItem("user", JSON.stringify(person));

    window.location.href = "/simple-banking-oparetion/login.html";
  } else {
    alert("please fill all input field");
  }
};
