import refs from './refs';
import apiService from './apiService';
import filmCard from '../templates/film-modal.hbs'
import { get } from 'jquery';

const modalWindow = document.querySelector('.content')


refs.gallery.addEventListener('click', filmClick);
refs.modal.addEventListener('click', closeModal);
window.addEventListener('keydown', modalCloseByEsc);


// function onMovieClick(e) {
//   if (e.target.nodeName !== 'IMG' && e.target.nodeName !== 'H2') {
//     return;
//   }
//   openModal();
// }
// // открытие модалки
function openModal() {
  refs.modal.classList.remove('is-hidden');
}

// закрытие модалки
function closeModal(e) {
  if (e.target.nodeName == 'svg' || e.target.nodeName == 'use') {
     refs.modal.classList.toggle('is-hidden') 
  }
  if (e.target.classList == 'backdrop') {
    refs.modal.classList.toggle('is-hidden')
  }

  
}
function modalCloseByEsc(e) {
  if (e.code === 'Escape') {
    closeModal();
    window.removeEventListener('keydown', modalCloseByEsc);
  }
}

 function filmClick(e) {
   if (e.target.nodeName !== 'LI' & e.target.nodeName !== 'IMG') {
    return 
  }
  const dataId = e.target.dataset.id
   const film = apiService.getBildFilm(dataId)

    film.then(response => {
    modalWindow.innerHTML = `${filmCard(response)}`
    openModal()
})
filmClick()
}
