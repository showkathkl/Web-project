const toggle = document.getElementById("togglePassword");
const password = document.getElementById("password");
const form = document.getElementById("loginForm");

toggle.onclick = () => {
  password.type = password.type === "password" ? "text" : "password";
  toggle.firstElementChild.classList.toggle("fa-eye-slash");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!username.value || !password.value) {
    alert("Please fill all fields");
    return;
  }

  document.querySelector(".primary-btn").innerText = "Signing in...";
  setTimeout(() => {
    window.location.href = "Select.html";
  }, 1300);
});
