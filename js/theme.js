const btnTheme = document.getElementById("btnTheme");
const mainSection = document.querySelector(".main");
const projectCard = document.querySelector(".project-card");
const btns = document.querySelectorAll('.btn')

function updateButtonText() {
  if (document.body.classList.contains("dark")) {
    btnTheme.textContent = "Dark Mode";
  } else {
    btnTheme.textContent = "Light Mode";
  }
}

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  mainSection.classList.add("dark");
}

updateButtonText();

btnTheme.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("dark");
  mainSection.classList.toggle("dark");
  btns.forEach(btn => {
    btn.classList.toggle('btn_type_second')

  })

  updateButtonText();

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
