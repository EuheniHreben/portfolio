const searchInput = document.getElementById("searchInput");
const content = document.getElementById("projects-content");

const projects = [
  {
    title: "Видеопродакшн",
    description: "Многостраничный сайт для студии видеосъёмки.",
    image: "images/projects/project4.jpg",
    url: "https://euhenihreben.github.io/Video/",
  },
  {
    title: "Магазин сёрфбордов",
    description:
      "Сайт с интерактивной навигацией и плавной прокруткой для продажи сёрфбордов.",
    image: "images/projects/project2.jpg",
    url: "https://euhenihreben.github.io/Surfboard/",
  },
  {
    title: "Путешествия по Индонезии",
    description:
      "Одностраничный сайт о путешествиях и достопримечательностях Индонезии.",
    image: "images/projects/project5.jpg",
    url: "https://euhenihreben.github.io/Qwery/",
  },
  {
    title: "Подбор цветовой палитры",
    description: "Сайт для подбора совместимых цветовых сочетаний.",
    image: "images/projects/project3.jpg",
    url: "https://euhenihreben.github.io/Colors/",
  },
  {
    title: "Учёт пробега",
    description:
      "Интерактивная карточка с вращением для учёта пробега автомобиля.",
    image: "images/projects/project1.jpg",
    url: "https://euhenihreben.github.io/cardRoll/",
  },
  {
    title: "Маркет еды",
    description:
      "Адаптивная страница с карточками блюд для онлайн-магазина еды.",
    image: "images/projects/project6.jpg",
    url: "https://euhenihreben.github.io/FoodShop/",
  },
  {
    title: "Список задач на день",
    description:
      "Простой и удобный список задач на каждый день с функцией отметки выполненных пунктов.",
    image: "images/projects/project7.jpg",
    url: "https://euhenihreben.github.io/ToDoList/",
  },
];

function insertProjects(projects) {
  projects.forEach((project, index) => {
    const link = document.createElement("a");
    link.href = project.url;
    link.target = "_blank";
    link.className = "project-card";
    link.style.animationDelay = `${index * 100}ms`;
    link.innerHTML = `
    <img src='${project.image}' alt='${project.title}' loading="lazy"/>
    <div class="project-card__info">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    </div>`;
    content.appendChild(link);
  });
}

function projectsRender(projects) {
  const oldProjects = document.querySelectorAll(".project-card");
  if (oldProjects.length > 0) {
    oldProjects.forEach((project) => {
      project.classList.add("fade-out");
    });
    setTimeout(() => {
      content.innerHTML = "";
      insertProjects(projects);
    }, 300);
  } else {
    insertProjects(projects);
  }
}

projectsRender(projects);

searchInput.addEventListener("input", (e) => {
  e.preventDefault();
  const query = e.target.value.toLowerCase();
  const filtered = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query)
  );
  projectsRender(filtered);
});
