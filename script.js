/* ===== DASHBOARD BUTTONS ===== */
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Viewing profile");
  });
});

/* ===== LOGOUT ===== */
const logoutBtn = document.querySelector("#class2 a");
if (logoutBtn) {
  logoutBtn.addEventListener("click", e => {
    e.preventDefault();
    if (confirm("Are you sure you want to logout?")) {
      alert("Logged out successfully");
    }
  });
}

/* ===== REGISTER VALIDATION ===== */
function validateForm() {
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let mobile = document.getElementById("mobile").value;

  if (!name || !password || !confirmPassword || !mobile) {
    alert("Please fill all fields");
    return false;
  }

  if (mobile.length !== 10 || isNaN(mobile)) {
    alert("Invalid mobile number");
    return false;
  }

  alert("Registration Successful");
  return true;
}

function addService() {
  let table = document.getElementById("serviceTable");
  let row = table.insertRow();

  row.insertCell(0).innerText = serviceName.value;
  row.insertCell(1).innerText = description.value;
  row.insertCell(2).innerText = "₹" + price.value;
  row.insertCell(3).innerText = duration.value;
}

function updateSummary() {
  let completed = document.getElementsByClassName("completed").length;
  let pending = document.getElementsByClassName("pending").length;
  let cancelled = document.getElementsByClassName("cancelled").length;

  let summary = document.getElementById("summary");
  if (summary) {
    summary.innerHTML =
      `Total: ${completed + pending + cancelled} |
       Completed: ${completed} |
       Pending: ${pending} |
       Cancelled: ${cancelled}`;
  }
}

window.onload = updateSummary;
