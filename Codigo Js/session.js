document.addEventListener('DOMContentLoaded', function () {
  const user = localStorage.getItem('usuario');
  if (!user) {
    window.location.href = 'index.html';
    return;
  }
  const nameEl = document.getElementById('nombre');
  if (nameEl) nameEl.textContent = user;
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function () {
      localStorage.removeItem('usuario');
      window.location.href = 'index.html';
    });
  }
});
