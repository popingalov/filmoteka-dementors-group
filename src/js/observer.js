import 'intersection-observer';
import ref from './refs.js';
import apiService from './apiService';
import tmp from '../templates/gallery-homepage.hbs';

let options = {
  rootMargin: '0px',
  threshold: 1.0,
};

function callback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting === true) {
      apiService.getTrendLoad().then(data => {
        if (data.page > 1) {
          setTimeout(500, apiService.renderObserver());
          console.log('hello');
        }
      });
    }
  });
}

let target = document.getElementById('sentinel');
let observer = new IntersectionObserver(callback, options);
observer.observe(target);
