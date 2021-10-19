//Если вы хотите импортировать Swiper со всеми модулями (связкой), то его следует импортировать из swiper/bundle:

//import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

//----??????----
//import Swiper, {
//Navigation, Pagination, Scrollbar, Mousewheel, Keyboard,EffectCoverflow, } /////from 'swiper';

///------test------работает с .swiper    .image-slider
///под проект
const swiper = new Swiper('.swiper', {
//// стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
////Буллеты, текущее положение
  pagination: {
    el: '.swiper-pagination',
    //bullet
    clickable: true,
    //dinamic bullet
    dinamicBUllets:true,
  },
////фракция 1/1//
////скрол
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
//// курсор рука
  grabCursor: true,
//// управление клавиатура
  keyboard: {
//включить/выключить
    enabled: true,
//включить/выключить
//только когда слайдер в пределах вьюпорта
onlyInViewport: true,
//включить/выключить клавишами pageUp, pageDown
pageUpDown:true,
  },

//// управление мышa
  mousewheel: {
    sensitivity: 1,
//класс на котором срабатывает мышь
//если слайдеров много, то будут срабатывать все
//  eventsTarget: '.image-slider',
  },
//автовысота
  autoHeigt: true,

//// кол-во слайдов для показа
//можно показывать не целые числа
  slidesPerView: 4,
  // отступы между слайдами
  spaceBetween: 20,
// кол-во пролистываемых слайдов
  slidesPerGroup: 1,
//активный слайд по центру
  centeredSlides: true,

////мультирядность

//// бесконечный слайдер
//!!! не подразумевает скролл - его нужно отключать
  loop: true,
//// свободный режим
  freeMode: true,
//// автопрокрутка
  autoplay: {
    //пауза между прокруткой
    delay: 2000,
    //закончить на последнем слайде
    //stopOnLastSlide:true,
    //отключить после ручного отключения
    disableOnInteractyon: false,
  },
//// скорость переключения
  speed: 500,

////вертикальній слайдер
// direction:'vertical',
////Эффекты переключения слайдов
//флип
//куб
//эффект потока
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 20,
    //наложение
    stretch: 50,
    //тень
    slideShadow: true,
  },
//// Адаптив
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    425: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});



//для проекта
//import refs from './refs';
//import apiService from './apiService';
//import CardSliderTpl from '../templates/slider.hbs';



//const sliderContainer = document.querySelector('.swiper-wrapper');
//const erorrUrl = '';
//const ApiService = new ApiService();
//renderTrendy();

//разобраться????
//async function renderTrendy() {
//  try {
//    const movies = await ApiService.fetchTrendingMovies();
//    renderSliderFilms(movies);
//  } catch (err) {
//  }
//}

//!!!!!!найти трейлер для кнопки .btn-youtube-slider

//рендер слайда
//function renderSliderFilms(articles) {
//  sliderContainer.innerHTML = CardSliderTpl(articles);
// swiperEl.update();
//trailer.createTrailerLink(document.querySelectorAll('.btn-youtube-slider'));
//}
