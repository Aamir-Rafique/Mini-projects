const projects = [
    {
    title: "To-Do List",
    image: "assets/todolist.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: ""
  },
  {
    title: "Calculator",
    image: "assets/calculator.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://yourusername.github.io/calculator"
  },
  {
    title: "Age Calculator",
    image: "assets/age-calculator.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://yourusername.github.io/calculator"
  },
  {
    title: "Digital Clock",
    image: "assets/dig-clock.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://yourusername.github.io/calculator"
  },
  {
    title: "Rock Paper Scissor",
    image: "assets/rock-ppr-scissor.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://yourusername.github.io/calculator"
  },
  {
    title: "Stopwatch",
    image: "assets/stopwatch.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://yourusername.github.io/calculator"
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
    link: "https://yourusername.github.io/calculator"
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
