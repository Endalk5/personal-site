import styles from './styles/app.module.css';
import { renderHome } from './pages/home';
import { renderAbout } from './pages/about';
import { renderProjects } from './pages/projects';
import { renderContact } from './pages/contact';

export function renderApp() {
  const app = document.getElementById('app');
  
  // Create header/navigation
  const header = document.createElement('header');
  header.className = styles.header;
  header.innerHTML = `
    <nav class="${styles.nav}">
      <h1 class="${styles.logo}">My Portfolio</h1>
      <ul class="${styles.navLinks}">
        <li><a href="#/" class="${styles.navLink}">Home</a></li>
        <li><a href="#/about" class="${styles.navLink}">About</a></li>
        <li><a href="#/projects" class="${styles.navLink}">Projects</a></li>
        <li><a href="#/contact" class="${styles.navLink}">Contact</a></li>
      </ul>
    </nav>
  `;
  
  // Create main content area
  const main = document.createElement('main');
  main.id = 'main-content';
  main.className = styles.main;
  
  // Create footer
  const footer = document.createElement('footer');
  footer.className = styles.footer;
  footer.innerHTML = `<p>&copy; 2026 My Portfolio. All rights reserved.</p>`;
  
  app.innerHTML = '';
  app.appendChild(header);
  app.appendChild(main);
  app.appendChild(footer);
  
  // Render home page by default
  renderHome();
}

export function updateContent(page) {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = '';
  
  switch(page) {
    case 'home':
      renderHome();
      break;
    case 'about':
      renderAbout();
      break;
    case 'projects':
      renderProjects();
      break;
    case 'contact':
      renderContact();
      break;
    default:
      renderHome();
  }
}
