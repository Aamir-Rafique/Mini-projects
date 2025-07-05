const projects = [
  {
    title: "Weather App",
    image: "assets/weatherapp.webp",
    techStack: ["HTML", "Tailwind CSS", "JavaScript"],
    link: "https://aamir-rafique.github.io/weather-app-html-tailwindcss-js/"
  },
  {
    title: "Currency Converter",
    image: "assets/currencyconverter.webp",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://aamir-rafique.github.io/currency-converter-html-css-js/"
  },
  {
    title: "To-Do List App",
    image: "assets/todolist.webp",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://aamir-rafique.github.io/To-do-list-html-css-js/"
  },
  {
    title: "Calculator",
    image: "assets/simplecalculator.webp",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://aamir-rafique.github.io/Calculator-html-css-javascript/"
  },

  {
    title: "Rock Paper Scissor",
    image: "assets/rockpaperscissor.webp",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://aamir-rafique.github.io/RockPaperScissor-game-html-css-js/"
  },
  {
    title: "Age Calculator",
    image: "assets/agecalculator.webp",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://aamir-rafique.github.io/Age-calculator-html-css-javascript/"
  },
  {
    title: "Stopwatch",
    image: "assets/stopwatch.webp",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://aamir-rafique.github.io/Stopwatch-html-css-js/"
  },
  {
    title: "Digital Clock",
    image: "assets/dig-clock.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://aamir-rafique.github.io/digital-clock-html-css-js/"
  },
  {
    title: "AR Fitness",
    image: "assets/arfitness.png",
    techStack: ["HTML", "CSS"],
    link: "https://yourusername.github.io/calculator"
  },

  {
    title: "AR Builders",
    image: "assets/arbuilders.png",
    techStack: ["HTML", "CSS"],
    link: "https://aamir-rafique.github.io/ar-builders-html-css/"
  }
];

const container = document.getElementById("projectContainer");

projects.forEach(project => {
  const card = document.createElement("a");
  card.className = "project-card";
  card.href = project.link;
  card.target = "_blank"; // opens in a new tab
  card.rel = "noopener noreferrer";

  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="project-image"/>
    <div class="project-content">
      <h3 class="project-title">${project.title}</h3>
      <div class="tech-stack">
        ${project.techStack.map(tech => `<span>${tech}</span>`).join('')}
      </div>
    </div>
  `;

  container.appendChild(card);
});
