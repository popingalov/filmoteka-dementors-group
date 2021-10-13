import apiService from './apiService';
import refs from './refs';
refs.searchInput.addEventListener('change', onSearch);

function onSearch(event) {
  event.preventDefault();
  console.log(event.target.value);
  const form = event.target.value;
  apiService.searchQuery = form;
  if (apiService.searchQuery.trim() !== '') {
    apiService.getSearchFilms();
    refs.searchForm.reset();
  }
}

// async function onSearch(event) {
//   event.preventDefault();
//   const form = event.currentTarget;
//   apiService.query = form.elements.query.value;

//   clearFilmography();

//   apiService.resetPage();

//   if (apiService.query === '' || apiService.query.trim().length === 0) {
//     fetchFilmography();
//     errorRequest.classList.remove('is-hidden');
//     document.querySelector('#pagination').innerHTML = ''; // hidden pagination completely
//     // pagination.reset(1); //show one page instead of total ones
//     return;
//   }

//   fetchFilmography();
// }
