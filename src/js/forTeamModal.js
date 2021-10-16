import refs from './refs.js'

const {openTeamModalBtn, closeTeamModalBtn, modalTeam} = refs

const modalWindow = () => { 
  openTeamModalBtn.addEventListener('click', toggleModal);
  closeTeamModalBtn.addEventListener('click', toggleModal);
  
  function toggleModal() {
  modalTeam.classList.toggle('is-hidden');
  }
};
modalWindow()


    