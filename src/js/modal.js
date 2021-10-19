import refs from './refs';
import apiService from './apiService';
import filmCard from '../templates/film-modal.hbs';
import { get } from 'jquery';

const modalWindow = document.querySelector('.content');

refs.gallery.addEventListener('click', filmClick);
refs.modal.addEventListener('click', closeModal);
window.addEventListener('keydown', modalCloseByEsc);

function openModal() {
  refs.modal.classList.remove('is-hidden');
}

// закрытие модалки
function closeModal(e) {
  if (e.target.nodeName == 'svg' || e.target.nodeName == 'use') {
    refs.modal.classList.toggle('is-hidden');
  }
  if (e.target.classList == 'backdrop') {
    refs.modal.classList.toggle('is-hidden');
  }
}
function modalCloseByEsc(e) {
  if (e.code === 'Escape') {
    closeModal();
    window.removeEventListener('keydown', modalCloseByEsc);
  }
}

function filmClick(e) {
  const dataId = e.target.closest('li').dataset.id;
  const film = apiService.getBildFilm(dataId);
  film.then(response => {
    modalWindow.innerHTML = `${filmCard(response)}`;
    if (
      JSON.parse(localStorage.getItem('watched')).find(event => event.id == response.id) !==
      undefined
    ) {
      document.querySelector('.modal__button-watched').textContent = 'Remove from Watched';
    }
    if (
      JSON.parse(localStorage.getItem('queue')).find(event => event.id == response.id) !== undefined
    ) {
      document.querySelector('.modal__button-queue').textContent = 'Remove from Queue';
    }

    openModal();
    watchedFunction();
    queueFunction();
  });
  function watchedFunction() {
    film.then(data => {
      const watchedBtn = document.querySelector('.modal__button-watched');
      const itemParse = JSON.parse(localStorage.getItem('watched'));
      function local(e) {
        if (e.target.textContent == 'Remove from Watched') {
          const findFilm = JSON.parse(localStorage.getItem('watched')).filter(
            film => film.id !== data.id,
          );
          localStorage.setItem('watched', JSON.stringify(findFilm));
          e.target.textContent = 'Add to Watched';
          return;
        }
        e.target.textContent = 'Remove from Watched';

        function push() {
          if (itemParse.indexOf(data) === -1) {
            itemParse.push(data);
          }
        }
        push();
        localStorage.setItem('watched', JSON.stringify(itemParse));
      }
      const onClickBtnWatch = watchedBtn.addEventListener('click', local);
      // const onClickBtnWatch = watchedBtn.addEventListener('click', () => { localStorage.removeItem('watched') })
    });
  }
  function queueFunction() {
    const queueBtn = document.querySelector('.modal__button-queue');
    film.then(data => {
      const itemParse = JSON.parse(localStorage.getItem('queue'));

      function local(e) {
        if (e.target.textContent == 'Remove from queue') {
          const findFilm = JSON.parse(localStorage.getItem('queue')).filter(
            film => film.id !== data.id,
          );
          localStorage.setItem('queue', JSON.stringify(findFilm));
          e.target.textContent = 'Add to queue';
          return;
        }
        e.target.textContent = 'Remove from queue';

        function push() {
          if (itemParse.indexOf(data) === -1) {
            console.log(itemParse.indexOf(data));
            itemParse.push(data);
          }
        }
        push();
        localStorage.setItem('queue', JSON.stringify(itemParse));
      }
      const onClickBtnWatch = queueBtn.addEventListener('click', local);
      // const queueBtn = watchedBtn.addEventListener('click', () => { localStorage.removeItem('watched') })
    });
  }
}
