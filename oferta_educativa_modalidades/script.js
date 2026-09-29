const buttons = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".card");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;

      cards.forEach(card => {
        card.style.display =
          filter === "all" || card.dataset.category === filter ? "flex" : "none";
      });
    });
  });


document.querySelectorAll(".toggle-info").forEach(button => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;
    const isOpen = details.classList.toggle("open");
    button.textContent = isOpen ? "Ocultar información ↑" : "Ver información ↓";
  });
});
