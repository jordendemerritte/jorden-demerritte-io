var thisYear = getFullYear();

skills = ["JavaScript", "HTML", "CSS", "Blender", "Adobe Photoshop"]

var skillsSection = document.getElementById("skills");
var skillsList = document.createElement("ul");

for (var i = 0; i < skills.length; i++) {
  var skill = document.createElement("li");
  skill.textContent = skills[i];
  skillsList.appendChild(skill);
};