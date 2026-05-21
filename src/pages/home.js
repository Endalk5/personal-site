import styles from '../styles/pages/home.module.css';

export function renderHome() {
  const mainContent = document.getElementById('main-content');
  
  mainContent.innerHTML = `
    <section class="${styles.hero}">
      <h2 class="${styles.title}">Welcome to My Portfolio</h2>
      <p class="${styles.subtitle}">Full Stack Developer | Creative Problem Solver</p>
      <p class="${styles.description}">Building beautiful and functional web experiences</p>
      <a href="#/projects" class="${styles.ctaButton}">View My Work</a>
    </section>
  `;
}
