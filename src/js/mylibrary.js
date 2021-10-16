import apiService from './apiService';
import refs from './refs';
import testHbs from '../templates/gallery-homepage.hbs';
import { startRender } from '../index';
const books = [];

/* localStorage.setItem('watcher', JSON.stringify(books));
refs.libraryBtn.addEventListener('click', localRender); */

refs.libraryBtn.addEventListener('click', libraryRebder);

function libraryRebder() {
  const localMass = JSON.parse(localStorage.getItem('startRender'));
  console.log(localMass);
  startRender(localMass);
}
/* async function startRender(mass) {
  const massForRender = await mass;
  const tryGenres = await apiService.getGenre();
  const genre = massForRender.results;

  localStorage.setItem('startRender', JSON.stringify(genre));
  console.log(JSON.parse(localStorage.getItem('startRender')));
} */
const massTrend = apiService.getTrend();
