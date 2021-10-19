import 'intersection-observer';
import ref from './refs.js'
import apiService from './apiService';
import tmp from '../templates/gallery-homepage.hbs'
import startRender from '../index.js'
let options = {
  rootMargin: '0px',
  threshold: 1.0
}


function callback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting === true) {
            const tryGenres = apiService.getGenre()
            apiService.getTrendLoad().then((data) => {
                const result = data.results
                if (data.page > 1) {
                                    result.forEach((e, i) => {
    e.genre_ids.forEach((er, ir) => {
      if (ir < 2) {
        result[i].genre_ids[ir] = ` ${tryGenres[er]}`;
        return;
      }
      if (ir == 2) {
        result[i].genre_ids[ir] = `OTHER`;
        return;
      }
      result[i].genre_ids.pop();
    });
});
                ref.galleryList.insertAdjacentHTML('beforeend', tmp(result))
                console.log('hello');

                }
            })
        }
    })
}

let target = document.getElementById('sentinel');
let observer = new IntersectionObserver(callback , options);
observer.observe(target);
