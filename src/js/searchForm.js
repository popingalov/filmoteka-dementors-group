import apiService from './apiService';
import refs from './refs';
import testHbs from '../templates/gallery-homepage.hbs';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/countdown/dist/PNotifyCountdown.css';
import { alert } from '@pnotify/core';
import notificationOptions from './notificationSettings.js';

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();
  apiService.searchQuery = refs.searchInput.value;
  if (apiService.searchQuery.trim() !== '') {
    apiService.getSearchFilms();
    refs.searchForm.reset();
    refs.galleryList.innerHTML = '';
    const mass = apiService.getSearchFilms();
    console.log(mass);
    markupQuery();
  } else {
    return alert(notificationOptions.incorrectQuery);
  }
}

async function markupQuery() {
  const tryThis = await apiService.getSearchFilms();
  refs.galleryList.insertAdjacentHTML('beforeend', testHbs(tryThis.results));
  if (tryThis.total_results === 0) {
    return alert(notificationOptions.notMachResults);
  }
}
