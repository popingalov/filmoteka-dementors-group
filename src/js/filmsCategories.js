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
    fetch(`${apiService.filmURL}/genre/movie/list?api_key=${apiService.key}`).then(response => {
    return response.json()
}).then(data => {
    
    const categoriesMarkUp = filmCategoriesTpl(data.genres);
    refs.genresContainer.insertAdjacentHTML('beforeend', categoriesMarkUp);
})
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
  refs.genresContainer.innerHTML =""
  refs.categoriesButton.classList.remove('categories-button-active');
  isActive = true;
}



refs.genresContainer.addEventListener('click', onClick)


function onClick(e) {
    console.log(e.target);
    if (e.target.nodeName !== "P") {
        return
    }
    const genreId = e.target.dataset.genresid;
    fetch(`${this.filmURL}/discover/movie?api_key=7c9dd50606a07df965d51fc9621e1448&with_genres=18`).then(response => {
        console.log(response)
    })
    
}



