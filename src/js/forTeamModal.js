import refs from './refs.js'

const {openTeamModalBtn, closeTeamModalBtn, modalTeam} = refs
const back = document.querySelector('.backdrop')
const modalWindow = () => { 
  openTeamModalBtn.addEventListener('click', toggleModal);
  closeTeamModalBtn.addEventListener('click', toggleModal);
  back.addEventListener('click', (e) => {
    if (e.target.classList == 'backdrop') {
      modalTeam.classList.toggle('is-hidden')
    }
  })

  function toggleModal() {
  modalTeam.classList.toggle('is-hidden');
  }

};
modalWindow()


    