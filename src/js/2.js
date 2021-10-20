//проверить работу этого варианта
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const footer = document.querySelector('.footercontainer')
console.log(footer);

// const body = document.querySelector('body');
const checkbox = document.querySelector('.theme-switchtoggle');

//const themeInLocalStorage = localStorage.getItem('Theme');
const saveTheme = localStorage.getItem('theme');
if (saveTheme === Theme.DARK) {
  checkbox.checked = true;
  document.body.classList.add(Theme.DARK);
  footer.classList.add(Theme.DARK);
  // modalRefs.movieWrap.classList.toggle(Theme.DARK);
}

(function openLastSavedTheme() {
  let defaultTheme = document.body.classList.add(Theme.LIGHT);

  if (saveTheme !== null) {
    defaultTheme = document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(saveTheme);

    if (document.body.classList.contains(Theme.DARK)) {
      checkbox.checked = true;
    }
  }
})();

checkbox.addEventListener('click', changeTheme);

function changeTheme(e) {
  document.body.classList.toggle(Theme.LIGHT);
  document.body.classList.toggle(Theme.DARK);

  footer.classList.toggle(Theme.LIGHT);
  footer.classList.toggle(Theme.DARK);

  // modalRefs.movieWrap.classList.toggle(Theme.LIGHT);
  // modalRefs.movieWrap.classList.toggle(Theme.DARK);

  if (e.currentTarget.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
}