
// const API_KEY = 'https://www.themoviedb.org/settings/api/';
// const BASE_URL = '4867f71c2cc3334fef3a71f8c4706576';
// export default class ApiService {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//   }

//   async fetchImages() {
//     const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;

//     const response = await fetch(url);
//     const images = await response.json();
//     const hits = await images.hits;
//     this.incrementPage();
//     return hits;
//   }

//   async fetchTotalHits() {
//     const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;

//     const response = await fetch(url);
//     const images = await response.json();
//     const totalHits = await images.totalHits;
//     return totalHits;
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }
import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
export const apiKey = '16085264-71307d3f0a6fd2ec26a379ecb';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.perPage = 12;
  }

  async fetchImg() {
    try {
      let response = await axios.get(
        `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=${this.perPage}&key=${apiKey}`,
      );

      let data = await response?.data?.hits;
      this.incrementPage();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(value) {
    this.searchQuery = value;
  }
}
 
