/* 
1.input
2.галерея
3.карточка
4.перемикач на теми
5.HOME
6.MY LIBRARY

*/
export default {
  searchForm: document.querySelector('.form-search'),
  searchInput: document.querySelector('.input-text'),
  gallery: document.querySelector('.gallery'),
  themeSwitch: document.querySelector('.theme-switch__control'),
  homeBtn: document.querySelector('[data-button="home"]'),
  libraryBtn: document.querySelector('[data-button="library"]'),
  logo: document.querySelector('.js-logo'),
  teamBtn: document.querySelector('.button-team'),
  closeBtnModal: document.querySelector('.modal__button-close'),
  modal: document.querySelector('div[data-modal]'),
  openTeamModalBtn: document.querySelector('.modal-open'),
  closeTeamModalBtn: document.querySelector('.modal-close__btn'),
  modalTeam: document.querySelector('.backdrop'),

};