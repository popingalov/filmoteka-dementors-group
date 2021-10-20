import apiService from './apiService';
import refs from './refs';
import testHbs from '../templates/gallery-homepage.hbs';
import { throttle } from 'throttle-debounce';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/countdown/dist/PNotifyCountdown.css';
import { alert } from '@pnotify/core';
import { startRenderPromis } from '../index';
import notificationOptions from './notificationSettings.js';

refs.searchForm.addEventListener('submit', throttle(500, onSearch));

function onSearch(event) {
  event.preventDefault();
  apiService.searchQuery = refs.searchInput.value;
  if (apiService.searchQuery.trim() !== '') {
    refs.searchForm.reset();
    refs.galleryList.innerHTML = '';
    markupQuery();
  } else {
    return alert(notificationOptions.incorrectQuery);
  }
}

async function markupQuery() {
  const tryThis = await apiService.getSearchFilms();
  const fixGanr = apiService.startRenderPromis(tryThis);
  apiService.changeSearch()
  if (tryThis.total_results === 0) {
    return alert(notificationOptions.notMachResults);
  }
}