import refs from './refs';
import apiService from './apiService';
import filmCard from '../templates/film-modal.hbs'
import { get } from 'jquery';

const modalWindow = document.querySelector('.content')

refs.gallery.addEventListener('click', filmClick);
refs.modal.addEventListener('click', closeModal);
window.addEventListener('keydown', modalCloseByEsc);

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
const dataId = e.target.closest('li').dataset.id
const film = apiService.getBildFilm(dataId)
  film.then(response => {
    modalWindow.innerHTML = `${filmCard(response)}`
    openModal()
    newFunction()
    newFunction2()
     if (JSON.parse(localStorage.getItem('watched')).find((e) => e !== response.id)) {
       console.log('awdawd');
     }
  })
  function newFunction() {
    const watchedBtn = document.querySelector('.modal__button-watched')
    film.then(data => {
      const itemParse = JSON.parse(localStorage.getItem('watched'))
      function local(e) {
        if (e.target.textContent == 'Remove from Watched') {
          const findFilm = JSON.parse(localStorage.getItem('watched')).filter(
          film => film.id !== data.id)
          localStorage.setItem('watched', JSON.stringify(findFilm))
          e.target.textContent = 'Add to Watched'
          return
        }
         
        e.target.textContent = 'Remove from Watched'
         
        itemParse.push(data)
        localStorage.setItem('watched', JSON.stringify(itemParse))
      }
      const onClickBtnWatch = watchedBtn.addEventListener('click', local)
        // const onClickBtnWatch = watchedBtn.addEventListener('click', () => { localStorage.removeItem('watched') })
    })
  }
  function newFunction2() {
    const queueBtn = document.querySelector('.modal__button-queue')
    film.then(data => {
      const itemParse = JSON.parse(localStorage.getItem('queue'))

      function local(e) {
        if (e.target.textContent == 'Remove from queue') {
          const findFilm = JSON.parse(localStorage.getItem('queue')).filter(
          film => film.id !== data.id)
          localStorage.setItem('queue', JSON.stringify(findFilm))
          e.target.textContent = 'Add to queue'
          return
        }
        e.target.textContent = 'Remove from queue'
         
        itemParse.push(data)
        localStorage.setItem('queue', JSON.stringify(itemParse))
      }
      const onClickBtnWatch = queueBtn.addEventListener('click', local)
        // const queueBtn = watchedBtn.addEventListener('click', () => { localStorage.removeItem('watched') })
    })
  }
}