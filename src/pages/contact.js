import styles from '../styles/pages/contact.module.css';

export function renderContact() {
  const mainContent = document.getElementById('main-content');
  
  mainContent.innerHTML = `
    <section class="${styles.contact}">
      <h2 class="${styles.title}">Get In Touch</h2>
      <form class="${styles.form}" id="contactForm">
        <div class="${styles.formGroup}">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="${styles.formGroup}">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="${styles.formGroup}">
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" class="${styles.submitBtn}">Send Message</button>
      </form>
      <p class="${styles.info}">Or reach out directly at: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
    </section>
  `;
  
  // Add form submission handler
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }
}

function handleFormSubmit(e) {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  e.target.reset();
}
