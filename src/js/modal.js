import refs from './refs';

refs.gallery.addEventListener('click', onMovieClick);
refs.closeBtnModal.addEventListener('click', closeModal);
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
function closeModal() {
    console.log("hi");
  refs.modal.classList.add('is-hidden');
}
function modalCloseByEsc(e) {
  if (e.code === 'Escape') {
    closeModal();
    window.removeEventListener('keydown', modalCloseByEsc);
  }
}
