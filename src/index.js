import './sass/main.scss';
import searchQuery from './js/searchForm.js';
/* import './js/theme.js'; */
import apiService from './js/apiService.js';
import testHbs from './templates/gallery-homepage.hbs';
/* const apiService = new ApiService(); */
console.log(apiService.getTrend());
const gallery = document.querySelector('.gallery');
console.log(gallery);

async function testRender() {
  const tryThis = await apiService.getTrend();
  gallery.insertAdjacentHTML('beforeend', testHbs(tryThis.results));
}
testRender();
