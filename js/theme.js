const button = document.getElementById("themeToggle");
const shift = document.querySelector(".shift");
const body = document.body;

function updateButtonText(isDark) {
  button.textContent = isDark ? "Dark" : "Light";
}

function setTheme(dark) {
  if (dark) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
  localStorage.setItem("theme", dark ? "dark" : "light");
  updateButtonText(dark);
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  setTheme(true);
} else {
  setTheme(false);
}

button.addEventListener("click", () => {
  if (button.disabled) return;
  button.disabled = true;

  shift.classList.add("active");

  setTimeout(() => {
    const isDark = body.classList.contains("dark");
    setTheme(!isDark);
  }, 300);

  setTimeout(() => {
    shift.classList.remove("active");
    shift.classList.add("reverse");
  }, 600);

  setTimeout(() => {
    shift.classList.remove("reverse");
    button.disabled = false;
  }, 620);
});
