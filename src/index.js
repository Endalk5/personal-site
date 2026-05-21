import styles from './styles/app.module.css';
import { initRouter } from './router';
import { renderApp } from './app';

// Initialize the app
const app = document.getElementById('app');

// Render initial content
renderApp();

// Initialize router for SPA navigation
initRouter();

console.log('Personal Site SPA loaded successfully!');
