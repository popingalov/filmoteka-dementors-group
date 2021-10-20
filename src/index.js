import './sass/main.scss';
import searchQuery from './js/searchForm.js';
/* import './js/theme.js'; */
//import './js/slider'
import apiService from './js/apiService.js';
import testHbs from './templates/gallery-homepage.hbs';
import './templates/teamCard.hbs';
import './js/pagination';
import './js/localStorage';
import './js/filmsPagination';
import modal from './js/modal';
import './js/forTeamModal.js';
import './js/mylibrary';
/* const apiService = new ApiService(); */

const gallery = document.querySelector('.gallery');

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
  gallery.innerHTML = testHbs(massForRender);
}
async function startRenderPromis(mass) {
  const massForRender = await mass;

  const tryGenres = await apiService.getGenre();
  localStorage.setItem("genres", JSON.stringify(tryGenres));
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

  gallery.insertAdjacentHTML('beforeend', testHbs(massForRender.results));
}
const massTrend = apiService.getTrend();
startRenderPromis(massTrend);
renderInLocalSave(massTrend);
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

export { startRender, startRenderPromis };
