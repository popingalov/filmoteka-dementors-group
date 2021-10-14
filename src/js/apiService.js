import axios from 'axios';

class FilmsApiProg {
  constructor(key) {
    this.filmURL = 'https://api.themoviedb.org/3';
    this.key = key;
    this.searchQuery = '';
  }

  async getSearchFilms() {
    try {
      const filmesFox = await axios.get(
        `${this.filmURL}/search/movie?api_key=${this.key}&query=${this.searchQuery}`,
      );
      const findFilms = filmesFox.data;
      console.log(filmesFox.data);
      return findFilms;
    } catch (error) {
      console.log(error);
    }
  }

  async getTrend() {
    try {
      const filmesFox = await axios.get(`${this.filmURL}/trending/movie/day?api_key=${this.key}`);
      const trending = filmesFox.data;
      return trending
    } catch (error) {
      console.log(error);
    }
  }
  async getIdFilms(filmId) {
    try {
      const filmesFox = await axios.get(`${this.filmURL}/movie${filmId}?api_key=${this.key}`);
      const films = filmesFox.data;
      return films;
    } catch (error) {
      console.log(error);
    }
  }
  async getTreilsMovie(movie) {
    try {
      const filmesFox = await axios.get(
        `${this.filmURL}/search/movie?api_key=${this.key}&movie=${movie}`,
      );
      const mabye = filmesFox.data;
      return mabye;
    } catch (error) {
      console.log(error);
    }
  }
  async getFilmsTraing(traing) {
    try {
      const filmesFox = await axios.get(
        `${this.filmURL}/movie/${traing}/videos?api_key=${this.key}&language=en-US`,
      );
      const traingData = filmesFox.data;
      const traingFilm = `https://www.youtube.com/watch?v=${(traingData[0], key)}`;
      return traingFilm;
    } catch (error) {
      console.log(error);
    }
  }

  async getBildFilm(film) {
    try {
      const filmesFox = await axios.get(`${this.filmURL}/movie/${film}?api_key=${this.key}`);
      const progThink = filmesFox.data;
      return progThink;
    } catch (error) {
      console.log(error);
    }
  }
        async getGenre() {
    try {
      const genreFilms = await axios.get(`${this.filmURL}/genre/movie/list?api_key=${this.key}`);
      const genre = genreFilms.data
      const { genres } = genre
      this.result = {}
      genres.forEach(({ id, name }) => {
        this.result[id] = name
      })
      return (this.result);
    } catch (error) {
      console.log(error);
    }
  }
}
export default new FilmsApiProg('7c9dd50606a07df965d51fc9621e1448');

//  const API_KEY = '22470352-c65ac8cc67498f5a0ef8fcd03';
// const BASE_URL = 'https://pixabay.com/api';

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
 
