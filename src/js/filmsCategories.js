import refs from './refs';
import apiService from './apiService';
import filmCategoriesTpl from '../templates/film-categories.hbs';

refs.categoriesButton.addEventListener('click', getFilmsCategories);
refs.genresCloseBtn.addEventListener('click', closeFilmCategories);
let isActive = true;
let firstRender = true;
function getFilmsCategories() {
  if (isActive && firstRender) {
    isActive = false;
    firstRender = false;
    refs.genresBackdrop.classList.remove('visually-hidden');

    fetch(`${apiService.filmURL}/genre/movie/list?api_key=${apiService.key}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const categoriesMarkUp = filmCategoriesTpl(data.genres);
        refs.genreWrapper.insertAdjacentHTML('beforeend', categoriesMarkUp);
      })
      .catch(error => console.log(error));
    return;
  }
  if (!firstRender) {
    refs.genresBackdrop.classList.remove('visually-hidden');
  } else {
    closeFilmCategories();
  }
}

function closeFilmCategories() {
  refs.genresBackdrop.classList.add('visually-hidden');
  /* refs.genreWrapper.innerHTML = ''; */
  isActive = true;
}

refs.genresContainer.addEventListener('click', onClick);

async function onClick(e) {
  if (e.target.nodeName !== 'P') {
    return;
  }
  closeFilmCategories();
  refs.galleryList.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
  refs.galleryList.innerHTML = '';
  const genreId = e.target.dataset.genresid;
  await apiService.saveganresId(genreId);

  await apiService.changeUrlGanr();
  apiService.renderObserver();
}
