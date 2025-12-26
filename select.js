const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 45px 120px rgba(0,0,0,0.8)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 30px 80px rgba(0,0,0,0.6)";
  });
});
