import Glide from '@glidejs/glide';
import filmsCardSliderTpl from '../templates/slider2.hbs';
//import ApiService from './apiService';
import trailer from './trailer';

const sliderContainer = document.querySelector('.js-slider-container');
renderTrendy();

const glide = new Glide('.glide', {
  type: 'slider',
  startAt: 0,
  perView: 8,
  autoplay: 2000,
  hoverpause: true,
  bound: true,
});

glide.mount();

//https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

function renderTrendy() {
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=7c9dd50606a07df965d51fc9621e1448`;
  return fetch(url)
    .then(response => response.json())
    .then(({ results }) => {
      return results;
    })
    .then(renderSliderFilms)
    .catch(err => {
      sliderContainer.innerHTML = `<img class="catch-error-pagination" src="${noposter}" />`;
    });
}

function renderSliderFilms(articles) {
  sliderContainer.innerHTML = filmsCardSliderTpl(articles);
trailer.createTrailerLink(document.querySelectorAll('.btn-youtube-slider'));
}

