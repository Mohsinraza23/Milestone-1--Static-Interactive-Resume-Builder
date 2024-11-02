const toggleButton = document.getElementById(
  "toggle-skills"
) as HTMLButtonElement;
const skillsSection = document.getElementById("skills") as HTMLElement;

let isSkillsVisible = false;

toggleButton.addEventListener("click", () => {
  isSkillsVisible = !isSkillsVisible;

  if (isSkillsVisible) {
    skillsSection.style.display = "block";
    skillsSection.style.maxHeight = skillsSection.scrollHeight + "px";
    toggleButton.textContent = "Hide Skills";
  } else {
    skillsSection.style.maxHeight = "0";
    toggleButton.textContent = "Show Skills";
  }
});
