var toggleButton = document.getElementById("toggle-skills");
var skillsSection = document.getElementById("skills");
// Add initial state
var isSkillsVisible = false;
toggleButton.addEventListener("click", function () {
    isSkillsVisible = !isSkillsVisible;
    if (isSkillsVisible) {
        // Show the skills section with smooth transition
        skillsSection.style.display = "block";
        skillsSection.style.maxHeight = skillsSection.scrollHeight + "px"; // Smooth expansion
        toggleButton.textContent = "Hide Skills"; // Change button label
    }
    else {
        // Hide the skills section
        skillsSection.style.maxHeight = "0"; // Smooth collapse
        toggleButton.textContent = "Show Skills"; // Change button label
    }
});
