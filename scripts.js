// Project data
const projects = [
    {
        title: "Project 1",
        description: "Weather app",
        category: "web",
        link: "https://github.com/kavya-sharma22/weather"
    },
    {
        title: "Project 2",
        description: "E Health Care Management",
        category: "Java",
        link: "https://github.com/kavya-sharma22/Health-care-management"
    },
];

// Function to dynamically load projects
function loadProjects(filteredCategory = "") {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';  // Clear previous projects
    projects
        .filter(project => filteredCategory === "" || project.category === filteredCategory)
        .forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project', 'fade-in');
            projectElement.innerHTML = 
                `<h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">View Project</a>`;
            container.appendChild(projectElement);
        });

    // Reveal the projects section with animation
    container.style.opacity = 1;
}

// Event listener for filtering projects
document.getElementById('all').addEventListener('click', () => loadProjects());
document.getElementById('web').addEventListener('click', () => loadProjects('web'));
document.getElementById('Java').addEventListener('click', () => loadProjects('Java'));

// Scroll to top functionality
const scrollTopBtn = document.getElementById('scroll-top-btn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scrolling for navigation links
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize projects when the page is loaded
window.onload = function () {
    loadProjects();
};
