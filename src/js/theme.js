const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
import refs from './refs';
const body = document.querySelector('body');
const checkbox = document.querySelector('.theme-switch__toggle');

const saveTheme = localStorage.getItem('theme');
if (saveTheme === Theme.DARK) {
  checkbox.checked = true;
  body.classList.add(Theme.DARK);
  refs.footerEl.classList.add(Theme.DARK);
  refs.genreWrapper.classList.add(Theme.DARK);
  refs.genreWrapper.classList.remove(Theme.LIGHT);
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
  refs.genreWrapper.classList.toggle(Theme.LIGHT);
  refs.genreWrapper.classList.toggle(Theme.DARK);
  refs.footerEl.classList.toggle(Theme.LIGHT);
  refs.footerEl.classList.toggle(Theme.DARK);

  if (e.currentTarget.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
