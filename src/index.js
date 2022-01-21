import './sass/main.scss';
import searchQuery from './js/searchForm.js';
import './js/refs';
import './js/theme';
import './js/pagination';
import apiService from './js/apiService.js';
import testHbs from './templates/gallery-homepage.hbs';
import './templates/teamCard.hbs';
import './js/pagination';
import './js/localStorage';
import './js/filmsPagination';
import modal from './js/modal';
import './js/forTeamModal.js';
import './js/mylibrary';

import './js/filmsCategories';

import './js/slider2';
import './js/scrollUpp';

import './js/observer.js';

const galleryList = document.querySelector('.gallery_list');

async function startRender(mass) {
  const massForRender = mass;
  console.log(massForRender);
  const tryGenres = await apiService.getGenre();
  const genre = massForRender;
  genre.forEach((e, i) => {
    e.genre_ids.forEach((er, ir) => {
      if (ir < 2) {
        genre[i].genre_ids[ir] = ` ${tryGenres[er]}`;
        return;
      }
      if (ir == 2) {
        genre[i].genre_ids[ir] = `OTHER`;
        return;
      }
      genre[i].genre_ids.pop();
    });
  });
  galleryList.innerHTML = testHbs(massForRender);
}

export { startRender };

if (!JSON.parse(localStorage.getItem('watched'))) {
  localStorage.setItem('watched', JSON.stringify([]));
}
if (!JSON.parse(localStorage.getItem('queue'))) {
  localStorage.setItem('queue', JSON.stringify([]));
}
