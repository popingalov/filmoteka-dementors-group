import refs from './refs';
import apiService from './apiService';
import { startRender } from '../index';
import axios from 'axios';
import filmCategoriesTpl from '../templates/film-categories.hbs';

refs.categoriesButton.addEventListener('click', getFilmsCategories);

let isActive = true;
function getFilmsCategories() {
  if (isActive) {
    isActive = false;
    refs.genresContainer.classList.remove('hidden');
    refs.categoriesButton.classList.add('categories-button-active');
    const tryGenres = apiService.getGenre();
    tryGenres.then(response => {
      const categoriesMarkUp = filmCategoriesTpl(response);
      refs.genresContainer.insertAdjacentHTML('beforeend', categoriesMarkUp);
    });
  } else {
    closeFilmCategories();
  }
}

function closeFilmCategories() {
  refs.genresContainer.innerHTML =""
  refs.categoriesButton.classList.remove('categories-button-active');
  isActive = true;
}

const massTrend = apiService.getTrend();
massTrend.then(data=>console.log(data))

// refs.genresContainer.addEventListener('click', onClick)


//https://api.themoviedb.org/3'
// `${this.filmURL}/genre/movie/list?api_key=${this.key}`
// '7c9dd50606a07df965d51fc9621e1448'



