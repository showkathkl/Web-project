const toggle = document.getElementById("togglePassword");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const form = document.getElementById("registerForm");

toggle.onclick = () => {
  password.type = password.type === "password" ? "text" : "password";
  toggle.firstElementChild.classList.toggle("fa-eye-slash");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!name.value || !mobile.value || !password.value || !confirmPassword.value) {
    alert("Please fill all fields");
    return;
  }

  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match");
    return;
  }

  document.querySelector(".primary-btn").innerText = "Creating account...";
  setTimeout(() => {
    window.location.href = "First login .html";
  }, 1500);
});
