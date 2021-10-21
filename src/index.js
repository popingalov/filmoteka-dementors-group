import './sass/main.scss';
import searchQuery from './js/searchForm.js';
import './js/refs';
//import './js/theme';
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


//import './js/slider';
import './js/slider2';
import './js/scrollUpp';

import './js/observer.js';



/* const apiService = new ApiService(); */

const galleryList = document.querySelector('.gallery_list');

/* function testOnTrue() {
  const startMass = JSON.parse(localStorage.getItem('startRender'));

  if (startMass.length === 0) {
    const massTrend = apiService.getTrend();
    localStorage.setItem('startRender', JSON.stringify(massTrend));
    startRenderPromis(massTrend);

    return;
  }
  startRender(startMass);
}
testOnTrue(); */

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

const massTrend = apiService.getTrend();
apiService.startRenderPromis(massTrend);
/* renderInLocalSave(massTrend);
async function renderInLocalSave(mass) {
  const massForRender = await mass;

  const tryGenres = await apiService.getGenre();
  const genre = massForRender.results;
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
  localStorage.setItem('startRender', JSON.stringify(massForRender));
}
 */
export { startRender};

if (!JSON.parse(localStorage.getItem('watched'))) {
  localStorage.setItem('watched', JSON.stringify([]));
}
if (!JSON.parse(localStorage.getItem('queue'))) {
  localStorage.setItem('queue', JSON.stringify([]));
}
