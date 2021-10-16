import './sass/main.scss';
import searchQuery from './js/searchForm.js';
/* import './js/theme.js'; */
import apiService from './js/apiService.js';
import testHbs from './templates/gallery-homepage.hbs';
import './templates/teamCard.hbs';
import './js/pagination';
import './js/localStorage';
import './js/filmsPagination';
import modal from './js/modal'
import './js/forTeamModal.js'
/* const apiService = new ApiService(); */
console.log(apiService.getTrend());
const gallery = document.querySelector('.gallery');

export default async function testRender() {
  const tryThis = await apiService.getTrend()
  const tryGenres = await apiService.getGenre()
  const genre = tryThis.results;
  genre.forEach((e, i) => {
   e.genre_ids.forEach((er, ir) => { genre[i].genre_ids[ir] = ` ${tryGenres[er]}`}
   )
  })
  // genre.forEach((e) => {
  //   if (e.release_date) {
  //    return e.release_date.slice(0, 4)
  //   }
  // })
  gallery.insertAdjacentHTML('beforeend', testHbs(tryThis.results));
}
testRender();
console.log(gallery);
