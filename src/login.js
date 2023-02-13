window.onload = () => {
  main();
};
let person = JSON.parse(window.localStorage.getItem("user"));
function main() {
  document.querySelector("#submit").addEventListener("click", (e) => {
    login(e);
  });
}

// event handle
const login = (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value,
    password = document.querySelector("#password").value;
  if (password === person.password && email === person.email) {
    window.localStorage.clear();
    window.location.href = "/home.html";
  } else {
    alert("Your Email or Password is invalid");
  }
};
