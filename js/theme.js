// const button = document.getElementById("themeToggle");
// const shift = document.querySelector(".shift");
// const body = document.body;

// function updateButtonText(isDark) {
//   button.textContent = isDark ? "Dark" : "Light";
// }

// function setTheme(dark) {
//   if (dark) {
//     body.classList.add("dark");
//   } else {
//     body.classList.remove("dark");
//   }
//   localStorage.setItem("theme", dark ? "dark" : "light");
//   updateButtonText(dark);
// }

// const savedTheme = localStorage.getItem("theme");
// if (savedTheme === "dark") {
//   setTheme(true);
// } else {
//   setTheme(false);
// }

// button.addEventListener("click", () => {
//   if (button.disabled) return;
//   button.disabled = true;

//   shift.classList.add("active");

//   setTimeout(() => {
//     const isDark = body.classList.contains("dark");
//     setTheme(!isDark);
//   }, 300);

//   setTimeout(() => {
//     shift.classList.remove("active");
//     shift.classList.add("reverse");
//   }, 600);

//   setTimeout(() => {
//     shift.classList.remove("reverse");
//     button.disabled = false;
//   }, 620);
// });


const button = document.getElementById("themeToggle");
const shift = document.querySelector(".shift");
const body = document.body;

// === Создание анимационных слоёв ===
function createShiftLayers() {
  const layerHeight = 100; // px
  const totalHeight = window.innerHeight;
  const numLayers = Math.ceil(totalHeight / layerHeight);

  shift.innerHTML = ""; // очистка перед созданием

  for (let i = 0; i < numLayers; i++) {
    const layer = document.createElement("div");
    layer.classList.add("shift__layer");
    layer.style.top = `${i * layerHeight}px`;
    layer.style.height = `${layerHeight}px`;
    layer.style.position = "absolute";
    layer.style.left = "0";
    layer.style.width = "100%";
    layer.style.overflow = "hidden";

    const inner = document.createElement("div");
    inner.classList.add("shift__layer-inner");
    inner.style.height = "200%";
    inner.style.background = "#111";
    inner.style.transform = "translateY(-100%)";
    inner.style.willChange = "transform";
    inner.style.backfaceVisibility = "hidden";

    layer.appendChild(inner);
    shift.appendChild(layer);
  }
}

// === Обновление текста кнопки ===
function updateButtonText(isDark) {
  button.textContent = isDark ? "Dark" : "Light";
}

// === Установка темы ===
function setTheme(dark) {
  if (dark) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
  localStorage.setItem("theme", dark ? "dark" : "light");
  updateButtonText(dark);
}

// === Начальная установка темы ===
const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme === "dark");

// === Смена темы с анимацией ===
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
  }, 600);
});

// === Инициализация слоёв при загрузке и ресайзе ===
createShiftLayers();
window.addEventListener("resize", createShiftLayers);
