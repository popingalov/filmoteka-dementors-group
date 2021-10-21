import refs from './refs';
import apiService from './apiService';
import { startRender } from '../index';
import axios from 'axios';
import filmCategoriesTpl from '../templates/film-categories.hbs';
console.log(refs.categoriesButton);
refs.categoriesButton.addEventListener('click', getFilmsCategories);

let isActive = true;
function getFilmsCategories() {
  if (isActive) {
    isActive = false;
    refs.genresContainer.classList.remove('hidden');
    refs.categoriesButton.classList.add('categories-button-active');
    fetch(`${apiService.filmURL}/genre/movie/list?api_key=${apiService.key}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const categoriesMarkUp = filmCategoriesTpl(data.genres);
        refs.genresContainer.insertAdjacentHTML('beforeend', categoriesMarkUp);
      });
    // const tryGenres = apiService.getGenre();
    //   tryGenres.then(response => {
    //   const categoriesMarkUp = filmCategoriesTpl(response);
    //   refs.genresContainer.insertAdjacentHTML('beforeend', categoriesMarkUp);
    // });
  } else {
    closeFilmCategories();
  }
}

function closeFilmCategories() {
  refs.genresContainer.innerHTML = '';
  refs.categoriesButton.classList.remove('categories-button-active');
  isActive = true;
}

refs.genresContainer.addEventListener('click', onClick);

async function onClick(e) {
  console.log(e.target);
  if (e.target.nodeName !== 'P') {
    return;
  }
  refs.galleryList.innerHTML = '';
  const genreId = e.target.dataset.genresid;
  console.log(genreId);
  await apiService.saveganresId(genreId);

  await apiService.changeUrlGanr();
  apiService.renderObserver();

  /* fetch(`${this.filmURL}/discover/movie?api_key=${this.key}&with_genres=${this.genreId}`).then(
    response => {
      return response.url;
    },
  ); */
}
