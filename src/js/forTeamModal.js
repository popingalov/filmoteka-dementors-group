const  openModalBtn = document.querySelector('.modal-open')
const  closeModalBtn = document.querySelector('.modal-close-btn')
const modal = document.querySelector('.backdrop')
    
const modalWindow = () => { 
  openModalBtn.addEventListener('click', toggleModal);
  closeModalBtn.addEventListener('click', toggleModal);
  
  function toggleModal() {
  modal.classList.toggle('is-hidden');
  }
};
modalWindow()