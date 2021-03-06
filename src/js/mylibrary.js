import refs from './refs';
import testHbs from '../templates/my-library-rander.hbs';

const sliderWrapper = document.querySelector('.slider-wrapper');

const queue = document.querySelector('.queue');
const watched = document.querySelector('.watched');

refs.nav.addEventListener('click', navClick);
refs.watchedBtn.addEventListener('click', libraryRebder);

watched.addEventListener('click', watchedBtnClick);
queue.addEventListener('click', queueBtnClick);

function watchedBtnClick() {
  watched.classList.add('active');
  queue.classList.remove('active');
  refs.watchedGallery.classList.remove('is-hidden');
  refs.queueGallery.classList.add('is-hidden');
  libraryRebder();
}
function queueBtnClick() {
  refs.watchedGallery.classList.add('is-hidden');
  refs.queueGallery.classList.remove('is-hidden');
  queue.classList.add('active');
  watched.classList.remove('active');
  libraryQueueRebder();
}

function navClick(e) {
  /*  e.preventDefault(); */
  if (e.target.textContent == 'Home') {
    refs.header.classList.remove('library');
    refs.libraryWrapper.classList.add('visually-hidden');
    refs.libraryBtn.classList.remove('current');
    refs.homeBtn.classList.add('current');
    refs.searchForm.classList.remove('is-hidden');
    document.getElementById('tui-pagination-container').classList.remove('is-hidden');
    refs.watchedGallery.classList.add('is-hidden');
    refs.queueGallery.classList.add('is-hidden');
    refs.gallery.classList.remove('is-hidden');
    /* sliderBox.classList.remove('is-hidden'); */
    sliderWrapper.classList.remove('is-hidden');
    return;
  }
  if (e.target.textContent == 'My library') {
    watchedBtnClick();
    refs.header.classList.add('library');
    refs.libraryWrapper.classList.remove('visually-hidden');
    refs.libraryBtn.classList.add('current');
    refs.homeBtn.classList.remove('current');
    refs.searchForm.classList.add('is-hidden');
    refs.gallery.classList.add('is-hidden');
    refs.watchedGallery.classList.remove('is-hidden');
    refs.queueGallery.classList.add('is-hidden');
    document.getElementById('tui-pagination-container').classList.add('is-hidden');
    /* sliderBox.classList.add('is-hidden'); */
    sliderWrapper.classList.add('is-hidden');
    return;
  }
}

function libraryRebder() {
  const localMass = JSON.parse(localStorage.getItem('watched'));
  localMass.forEach((e, i) => {
    localMass[i].release_date = localMass[i].release_date.slice(0, 4);
    e.genres.forEach((er, ir) => {
      if (ir >= 3) {
        localMass[i].genres.pop();
        return;
      }
      if (ir == 2) {
        localMass[i].genres[ir] = { name: `OTHER` };
        return;
      }
    });
  });

  startRender(localMass, refs.watchedGallery);
  if (localMass.length < 1) {
    refs.watchedGallery.innerHTML = '<p class="modal__title">You have not added anything yet.</p>';
  }
}

async function startRender(mass, point) {
  const massForRender = mass;
  point.innerHTML = testHbs(massForRender);
}

function libraryQueueRebder() {
  const localMass = JSON.parse(localStorage.getItem('queue'));
  localMass.forEach((e, i) => {
    localMass[i].release_date = localMass[i].release_date.slice(0, 4);
    e.genres.forEach((er, ir) => {
      if (ir >= 3) {
        localMass[i].genres.pop();
        return;
      }
      if (ir == 2) {
        localMass[i].genres[ir] = { name: `OTHER` };
        return;
      }
    });
  });

  startRender(localMass, refs.queueGallery);
  if (localMass.length < 1) {
    refs.queueGallery.innerHTML = '<p class="modal__title">You have not added anything yet.</p>';
  }
}
