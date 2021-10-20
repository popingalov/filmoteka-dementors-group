import 'intersection-observer';
import ref from './refs.js'
import apiService from './apiService';

let options = {
  rootMargin: '0px',
  threshold: 1.0
}

function callback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting === true) {
            apiService.getTrendLoad().then((data) => {
                if (data.page > 1) {
                    apiService.renderObserver()
                }
            })
        }
    })
}

let target = document.getElementById('sentinel');
let observer = new IntersectionObserver(callback , options);
observer.observe(target);
