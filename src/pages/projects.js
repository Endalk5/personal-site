import styles from '../styles/pages/projects.module.css';

export function renderProjects() {
  const mainContent = document.getElementById('main-content');
  
  const projects = [
    {
      title: 'Project One',
      description: 'A responsive web application built with vanilla JavaScript',
      link: '#'
    },
    {
      title: 'Project Two',
      description: 'An interactive dashboard with real-time data visualization',
      link: '#'
    },
    {
      title: 'Project Three',
      description: 'E-commerce platform with modern UI/UX design',
      link: '#'
    }
  ];
  
  let projectsHTML = `<h2 class="${styles.title}">My Projects</h2><div class="${styles.grid}">`;
  
  projects.forEach(project => {
    projectsHTML += `
      <div class="${styles.card}">
        <h3 class="${styles.projectTitle}">${project.title}</h3>
        <p class="${styles.description}">${project.description}</p>
        <a href="${project.link}" class="${styles.link}">View Project →</a>
      </div>
    `;
  });
  
  projectsHTML += '</div>';
  mainContent.innerHTML = projectsHTML;
}
