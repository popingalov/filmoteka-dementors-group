import refs from './refs';
import apiService from './apiService';
import filmCard from '../templates/film-modal.hbs'

const modalWindow = document.querySelector('.modal')


refs.gallery.addEventListener('click', onMovieClick);
refs.modal.addEventListener('click', closeModal);
window.addEventListener('keydown', modalCloseByEsc);


function onMovieClick(e) {
  if (e.target.nodeName !== 'IMG' && e.target.nodeName !== 'H2') {
    return;
  }
  openModal();
}
// открытие модалки
function openModal() {
  refs.modal.classList.remove('is-hidden');
}

// закрытие модалки
function closeModal(e) {
  if(e.target.nodeName == 'svg' || e.target.nodeName == 'use'){
     refs.modal.classList.toggle('is-hidden') 
  }
if(e.target.classList == 'backdrop'){refs.modal.classList.toggle('is-hidden')}
  
}
function modalCloseByEsc(e) {
  if (e.code === 'Escape') {
    closeModal();
    window.removeEventListener('keydown', modalCloseByEsc);
  }
}

const film = apiService.getBildFilm(610253)
film.then(response => {
  console.log(response);
  modalWindow.insertAdjacentHTML('beforeend', filmCard(response))
})



