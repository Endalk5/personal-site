import { updateContent } from './app';

export function initRouter() {
  // Handle hash changes
  window.addEventListener('hashchange', handleRouteChange);
  
  // Handle initial route
  handleRouteChange();
}

function handleRouteChange() {
  const hash = window.location.hash.slice(1) || '/';
  const route = hash.split('/')[1] || '';
  
  // Route mapping
  const routeMap = {
    '': 'home',
    'about': 'about',
    'projects': 'projects',
    'contact': 'contact',
  };
  
  const page = routeMap[route] || 'home';
  updateContent(page);
  
  // Highlight active nav link
  document.querySelectorAll('a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + hash || 
        (hash === '/' && link.getAttribute('href') === '#/')) {
      link.classList.add('active');
    }
  });
}
