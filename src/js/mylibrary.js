import apiService from './apiService';
import refs from './refs';
import testHbs from '../templates/gallery-homepage.hbs';
import { startRender } from '../index';

/* localStorage.setItem('watcher', JSON.stringify(books));
refs.libraryBtn.addEventListener('click', localRender); */

refs.nav.addEventListener('click', navClick);

function navClick(e) {
  console.dir(e.target.textContent);
  if (
    e.target.nodeName == 'svg' ||
    e.target.nodeName == 'use' ||
    e.target.textContent == 'Filmoteka' ||
    e.target.textContent == 'Home'
  ) {
    console.log(e.target);
    libraryRebder();
  }
}
console.log('asd');
function libraryRebder() {
  const localMass = JSON.parse(localStorage.getItem('startRender'));
  localMass.results.pop();
  localMass.results.pop();
  localMass.results.pop();
  localMass.results.pop();
  localMass.results.pop();
  localMass.results.pop();
  localMass.results.pop();
  localMass.results.pop();
  localMass.results.pop();
  localMass.results.pop();
  localMass.results.pop();
  localMass.results.pop();
  localMass.results.pop();
  localMass.results.pop();
  localMass.results.pop();
  localMass.results.pop();
  localMass.results.pop();
  localMass.results.pop();
  console.log(localMass);
  startRender(localMass.results);
}
/* async function startRender(mass) {
  const massForRender = await mass;
  const tryGenres = await apiService.getGenre();
  const genre = massForRender.results;

  localStorage.setItem('startRender', JSON.stringify(genre));
  console.log(JSON.parse(localStorage.getItem('startRender')));
} */
