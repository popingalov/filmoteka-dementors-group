import apiService from './apiService';
import refs from './refs';
import testHbs from '../templates/my-library-rander.hbs';
/* import { startRender } from '../index'; */
import refrs from './refs';

/* localStorage.setItem('watcher', JSON.stringify(books));
refs.libraryBtn.addEventListener('click', localRender); */

refs.nav.addEventListener('click', navClick);
refs.watchedBtn.addEventListener('click', libraryRebder);

function navClick(e) {
  e.preventDefault();
  console.dir(e.target.textContent);
  if (
    e.target.nodeName == 'svg' ||
    e.target.nodeName == 'use' ||
    e.target.textContent == 'Filmoteka' ||
    e.target.textContent == 'Home'
  ) {
    refs.header.classList.remove('library');
    refs.libraryWrapper.classList.add('visually-hidden');
    refs.libraryBtn.classList.remove('current');
    refs.homeBtn.classList.add('current');
    refs.searchForm.classList.remove('is-hidden');
    refs.gallery.innerHTML = '';
    render();
    return;
  }
  if (e.target.textContent == 'My library') {
    refs.gallery.innerHTML = '';
    libraryRebder();
    refs.header.classList.add('library');
    refs.libraryWrapper.classList.remove('visually-hidden');
    refs.libraryBtn.classList.add('current');
    refs.homeBtn.classList.remove('current');
    refs.searchForm.classList.add('is-hidden');
    console.log('yep');
  }
}

console.log('asd');
function libraryRebder() {
  const localMass = JSON.parse(localStorage.getItem('watched'));
  localMass.forEach((e, i) => {
    console.log(e.genres);
    e.genres.forEach((er, ir) => {
      if (ir == 3) {
        localMass[i].genres.pop();
        return;
      }
      if (ir == 2) {
        localMass[i].genres[ir] = { name: `OTHER` };
        return;
      }
    });
  });

  console.log(localMass[0].genres.length);
  startRender(localMass);
}

async function startRender(mass) {
  const massForRender = mass;
  console.log(massForRender);
  refs.gallery.innerHTML = testHbs(massForRender);
}

async function render() {
  const massForRender = await apiService.getTrend();

  refs.gallery.insertAdjacentHTML('beforeend', testHbs(massForRender.results));
  console.log(massForRender);
}

/* async function startRender(mass) {
  const massForRender = await mass;
  const tryGenres = await apiService.getGenre();
  const genre = massForRender.results;

  localStorage.setItem('startRender', JSON.stringify(genre));
  console.log(JSON.parse(localStorage.getItem('startRender')));
} */
