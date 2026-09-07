(function () {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const saved = localStorage.getItem('theme') || 'dark';

  function setTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    if (toggle) {
      toggle.textContent = theme === 'dark' ? '🌙' : '☀️';
      toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
      toggle.title = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
    }
  }

  setTheme(saved);

  if (toggle) {
    toggle.addEventListener('click', function () {
      setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
    });
  }
})();
