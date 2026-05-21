import styles from '../styles/pages/about.module.css';

export function renderAbout() {
  const mainContent = document.getElementById('main-content');
  
  mainContent.innerHTML = `
    <section class="${styles.about}">
      <h2 class="${styles.title}">About Me</h2>
      <div class="${styles.content}">
        <p>Hi! I'm a passionate web developer with experience in building modern web applications.</p>
        <p>I specialize in:</p>
        <ul class="${styles.skills}">
          <li>Frontend Development (HTML, CSS, JavaScript)</li>
          <li>Single Page Applications (SPAs)</li>
          <li>Responsive Design</li>
          <li>Web Performance Optimization</li>
        </ul>
        <p>When I'm not coding, you can find me learning new technologies and exploring design trends.</p>
      </div>
    </section>
  `;
}
