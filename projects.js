const response = await fetch("./projects.json");

const json = await response.json();

json.forEach((project) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <a href="${project.link}" target="_blank" rel="noopener noreferrer">
      <img src="${project.thumbnail}" alt="${project.name}" class="card-image">
    </a>
    <div class="card-content">
      <h3 class="card-title">${project.name}</h3>
      <p class="card-description">${project.description}</p>
      <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="card-link">View Source Code</a>
    </div>
  `;
  const projectsContainer = document.getElementById("projects-container");
  projectsContainer.appendChild(card);
});
