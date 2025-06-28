const projects = [
    {
    title: "To-Do List",
    image: "assets/todolist.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://aamir-rafique.github.io/To-do-list-html-css-js/"
  },
  {
    title: "Calculator",
    image: "assets/calculator.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://aamir-rafique.github.io/Calculator-html-css-javascript/"
  },
  {
    title: "Age Calculator",
    image: "assets/age-calculator.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://aamir-rafique.github.io/Age-calculator-html-css-javascript/"
  },
  {
    title: "Digital Clock",
    image: "assets/dig-clock.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://aamir-rafique.github.io/digital-clock-html-css-js/"
  },
  {
    title: "Rock Paper Scissor",
    image: "assets/rock-ppr-scissor.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://aamir-rafique.github.io/RockPaperScissor-game-html-css-js/"
  },
  {
    title: "Stopwatch",
    image: "assets/stopwatch.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://aamir-rafique.github.io/Stopwatch-html-css-js/"
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
