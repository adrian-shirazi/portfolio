const response = await fetch("./projects.json");

const json = await response.json();

json.forEach((element) => {
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode(element.name);
  newDiv.appendChild(newContent);
  const currentDiv = document.getElementById("projects-container");
  currentDiv.insertBefore(newDiv, currentDiv);
});
