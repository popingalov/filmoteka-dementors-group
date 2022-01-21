/*
1.input
2.галерея
3.карточка
4.перемикач на теми
5.HOME
6.MY LIBRARY

*/
export default {
  searchForm: document.querySelector('.form'),
  searchInput: document.querySelector('.search-field'),
  gallery: document.querySelector('.gallery'),
  galleryList: document.querySelector('.gallery_list'),
  genresList: document.querySelector('.genres-list'),
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
  headerContainer: document.querySelector('.header-container'),
  categoriesButton: document.querySelector('[data-action="open-categories"]'),
  genresContainer: document.querySelector('.genres'),
  genresItem: document.querySelector('.genres-item'),
  //sliderContainer:document.querySelector('.swiper-wrapper');

  header: document.querySelector('.page-header--home'),
  //sliderContainer:document.querySelector('.swiper-wrapper');
  bodyEl: document.querySelector('body'),
  footerEl: document.querySelector('.footer'),
  libraryWrapper: document.querySelector('.library__wrapper'),

  watchedBtn: document.querySelector('.watched'),
  queueBtn: document.querySelector('.queue'),
  watchedGallery: document.querySelector('.watched-gallery'),
  queueGallery: document.querySelector('.queue-gallery'),
  genresBackdrop: document.querySelector('.genres-backdrop'),
  genresCloseBtn: document.querySelector('[data-action="close-genres"]'),
  genreWrapper: document.querySelector('.genres'),
  /* genreWrapperr: document.querySelector('.genres-wraper'), */
};
