const dots = document.querySelectorAll(".dot");
const diapoContainer = document.querySelector(".diapo-container");

const slideWidth = 20 + 3;

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    diapoContainer.style.transform = `translateX(-${index * slideWidth}rem)`;

    dots.forEach((d) => d.classList.remove("active"));
    dot.classList.add("active");
  });
});
