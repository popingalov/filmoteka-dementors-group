import apiService from './apiService';
import refs from './refs';
import testHbs from '../templates/gallery-homepage.hbs';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/countdown/dist/PNotifyCountdown.css';
import { alert } from '@pnotify/core';
import notificationOptions from './notificationSettings.js';
import { startRenderPromis } from '../index';
refs.searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();
  apiService.searchQuery = refs.searchInput.value;
  if (apiService.searchQuery.trim() !== '') {
    apiService.getSearchFilms();
    refs.searchForm.reset();
    refs.gallery.innerHTML = '';
    const mass = apiService.getSearchFilms();
    console.log(mass);
    startRenderPromis(mass);
  } else {
    return alert(notificationOptions.incorrectQuery);
  }
}
