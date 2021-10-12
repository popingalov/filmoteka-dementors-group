import './sass/main.scss';
import refs from './js/refs';
import ApiService from './js/apiService';
import BtnService from './js/btnService';
import photoCard from './templates/image-card.hbs';
import { apiKey } from './js/apiService';

const { formSearch, imageGallery, loadMoreBtn, loadMoreLabel, loadMoreSpinner } = refs;

const imageApi = new ApiService();
const button = new BtnService({
  loadMoreBtn: loadMoreBtn,
  loadMoreLabel: loadMoreLabel,
  loadMoreSpinner: loadMoreSpinner,
  classList: 'd-none',
});

const fetchImg = () => {
  button.disable();

  imageApi.fetchImg().then(data => {
    imageGallery.insertAdjacentHTML('beforeend', photoCard(data));
    button.show();
    button.enable();
    const { height: cardHeight } = imageGallery.firstElementChild;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  });
};

const searchImg = event => {
  event.preventDefault();
  clearGallery();
  imageApi.resetPage();

  const userRequest = event.currentTarget.elements.query.value;
  imageApi.query = userRequest;
  fetchImg();

  formSearch.reset();
};

formSearch.addEventListener('submit', searchImg);
loadMoreBtn.addEventListener('click', fetchImg);

function clearGallery() {
  imageGallery.innerHTML = '';
}