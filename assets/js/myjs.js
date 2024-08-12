// Get the container element
const projectsContainer = document.getElementById('projects-page-projects');
		
// Check if the container is found
if (projectsContainer) {
    // Get all child elements with class 'spotlight'
    const projects = projectsContainer.querySelectorAll('.project');

    // Count the number of items
    const projectsCount = projects.length;

    // Update background color for each item
    projects.forEach((project, index) => {
        project.style.backgroundColor = getAlphaAdjustedColor(index);
    });

    function getAlphaAdjustedColor(index) {
        const alpha = index / (projectsCount - 1);
        return `rgba(0, 0, 0, ${alpha})`;
    }
} else {
    console.error('Container element not found.');
}