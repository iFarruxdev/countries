let toggleButton = document.querySelector(".site-header-toggler");
let toggleText = document.querySelector(".site-header-toggler-inner-text");

if (localStorage.getItem("theme")) {
  document.body.classList.add("dark-mode");
}

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList == "dark-mode") {
      toggleText.textContent = "Light Mode"
      localStorage.setItem('theme' , "dark-mode");
    } else {
      toggleText.textContent = "Dark Mode"
      localStorage.setItem('theme' , "");
    }
  });
}
