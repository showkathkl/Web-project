function showContent(sectionId, event) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.style.display = "none";
  });

  document.getElementById(sectionId).style.display = "block";

  document.querySelectorAll(".menu a").forEach(a => {
    a.classList.remove("active");
  });

  event.target.classList.add("active");
  document.getElementById("pageTitle").innerText = event.target.innerText;
}

function logout() {
  if (confirm("Are you sure you want to logout?")) {
    window.location.href = "First login .html";
  }
}

document.querySelectorAll("table tr").forEach((row, index) => {
  if (index !== 0) {
    row.addEventListener("click", () => {
      let data = [];
      row.querySelectorAll("td").forEach(td => data.push(td.innerText));
      alert("Details:\n" + data.join(" | "));
    });
  }
});

window.onload = () => {
  document.querySelector(".menu a.active").click();
};
