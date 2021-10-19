/*
1.input
2.галерея
3.карточка
4.перемикач на теми
5.HOME
6.MY LIBRARY

*/
export default {
  searchForm: document.querySelector('.search-form'),
  searchInput: document.querySelector('.search-field'),
  gallery: document.querySelector('.gallery'),
  //themeSwitch: document.querySelector('.theme-switch__control'),
    themeSwitch: document.querySelector('.theme-switch__control'),
  homeBtn: document.querySelector('.home__button'),
  libraryBtn: document.querySelector('.library__button'),
  logo: document.querySelector('.js-logo'),
  teamBtn: document.querySelector('.button-team'),
  closeBtnModal: document.querySelector('.modal__button-close'),
  modal: document.querySelector('div[data-modal]'),
  openTeamModalBtn: document.querySelector('.modal-open'),
  closeTeamModalBtn: document.querySelector('.modal-close__btn'),
  modalTeam: document.querySelector('.backdrop'),
  nav: document.querySelector('.site-nav'),

//sliderEl: document.querySelector('.slider-wrapper'),
bodyEl: document.querySelector('body'),
footerEl: document.querySelector('.footer'),


  watchedBtn: document.querySelector('.watched'),
  queueBtn: document.querySelector('.queue'),

};
