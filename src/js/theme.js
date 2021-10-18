const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
import refs from './refs.js';
const body = document.querySelector('body');
const checkbox = document.querySelector('.theme-switch__toggle');

//const themeInLocalStorage = localStorage.getItem('Theme');
const saveTheme = localStorage.getItem('theme');
if (saveTheme === Theme.DARK) {
  checkbox.checked = true;
  refs.bodyEl.classList.add(Theme.DARK);
  refs.footerEl.classList.add(Theme.DARK);
  refs.modal.movieWrap.classList.toggle(Theme.DARK);
}

(function openLastSavedTheme() {
  let defaultTheme = body.classList.add(Theme.LIGHT);

  if (saveTheme !== null) {
    defaultTheme = body.classList.remove(Theme.LIGHT);
    body.classList.add(saveTheme);

    if (body.classList.contains(Theme.DARK)) {
      checkbox.checked = true;
    }
  }
})();

checkbox.addEventListener('click', changeTheme);

function changeTheme(e) {
  body.classList.toggle(Theme.LIGHT);
  body.classList.toggle(Theme.DARK);

  footer.classList.toggle(Theme.LIGHT);
  footer.classList.toggle(Theme.DARK);

  modalRefs.movieWrap.classList.toggle(Theme.LIGHT);
  modalRefs.movieWrap.classList.toggle(Theme.DARK);

  if (e.currentTarget.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
