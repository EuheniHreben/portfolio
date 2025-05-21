const searchInput = document.getElementById("searchInput");
const content = document.getElementById("projects-content");

const projects = [
  {
    title: "Surfboard Store",
    description: "One page сайт для продажи сёрфбордов с плавной прокруткой.",
    image: "images/project2.png",
    url: "https://euhenihreben.github.io/Surfboard/",
  },
  {
    title: "Video Production",
    description: "Многостраничный сайт для студии видеосъёмки.",
    image: "images/project4.png",
    url: "https://euhenihreben.github.io/Video/",
  },
  {
    title: "Indonesia Travel",
    description:
      "Одностраничный сайт о путешествиях и достопримечательностях Индонезии.",
    image: "images/project5.png",
    url: "https://euhenihreben.github.io/Qwery/",
  },
  {
    title: "Mileage Tracker",
    description:
      "Интерактивная карточка с вращением для учёта пробега автомобиля.",
    image: "images/project1.png",
    url: "https://euhenihreben.github.io/cardRoll/",
  },
  {
    title: "Color Palette Picker",
    description:
      "Одностраничный сайт для подбора совместимых цветовых сочетаний.",
    image: "images/project3.png",
    url: "https://euhenihreben.github.io/Colors/",
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
    <h3>${project.title}</h3>
    <p>${project.description}</p>`;
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
