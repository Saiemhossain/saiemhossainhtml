//Mobile Menu Script



const mobile_bars = document.querySelector(".mobile_bars");
mobile_bars.addEventListener("click", () => {
  document.querySelector(".main_menu").classList.toggle("open");
});


//Light And Dark Mood

const darkTheme = document.querySelector(".dark_theme");
darkTheme.addEventListener("click", () => {
  darkTheme.querySelector("i").classList.toggle("fa-moon");
  darkTheme.querySelector("i").classList.toggle("fa-sun");
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    darkTheme.querySelector("i").classList.add("fa-moon");
  } else {
    darkTheme.querySelector("i").classList.add("fa-sun");

  }
});
