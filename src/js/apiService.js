import axios from 'axios';
import refs from './refs.js';
import tmp from '../templates/gallery-homepage.hbs';

class filmsApiProg {
  constructor(key) {
    this.filmURL = 'https://api.themoviedb.org/3';
    this.key = key;
    this.searchQuery = '';
    this.page = 1;
    this.search = `${this.filmURL}/trending/movie/day?api_key=${this.key}`;
    this.genreId = 1;
  }
  changeSearch() {
    this.search = `${this.filmURL}/search/movie?api_key=${this.key}&query=${this.searchQuery}`;
  }

  saveganresId(id) {
    this.genreId = id;
    console.log(id);
  }
  changeUrlGanr() {
    this.search = `${this.filmURL}/discover/movie?api_key=${this.key}&with_genres=${this.genreId}`;
    console.log(this.search);
  }
  async renderObserver() {
    console.log(this.genreId, this.search);
    const massForRender = await axios.get(`${this.search}&page=${this.page}`);
    console.log(this.genreId, this.search);
    const newMass = massForRender.data;
    const tryGenres = await this.getGenre();
    const genre = newMass.results;
    genre.forEach((e, i) => {
      genre[i].release_date = genre[i].release_date.slice(0, 4);
      e.genre_ids.forEach((er, ir) => {
        if (ir < 2) {
          genre[i].genre_ids[ir] = ` ${tryGenres[er]}`;
          return;
        }
        if (ir == 2) {
          genre[i].genre_ids[ir] = ` Other`;
          return;
        }
        genre[i].genre_ids.pop();
      });
    });
    refs.galleryList.insertAdjacentHTML('beforeend', tmp(genre));
  }
  async getSearchFilms() {
    try {
      const filmesFox = await axios.get(
        `${this.filmURL}/search/movie?api_key=${this.key}&query=${this.searchQuery}`,
      );
      const findFilms = filmesFox.data;
      console.log(filmesFox.data.results);
      return findFilms;
    } catch (error) {
      console.log(error);
    }
  }

  async getTrend(page = 1) {
    try {
      const filmesFox = await axios.get(
        `${this.filmURL}/trending/movie/day?api_key=${this.key}&page=${page}`,
      );
      const trending = filmesFox.data;
      return trending;
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
      const genre = genreFilms.data;
      const { genres } = genre;
      this.result = {};
      genres.forEach(({ id, name }) => {
        this.result[id] = name;
      });
      return this.result;
    } catch (error) {
      console.log(error);
    }
  }
  async getTrendLoad() {
    try {
      const filmesFox = await axios.get(
        `${this.filmURL}/trending/movie/day?api_key=${this.key}&page=${this.page}`,
      );
      const trending = filmesFox.data;
      this.incrementPage();
      return trending;
    } catch (error) {
      console.log(error);
    }
  }
  incrementPage() {
    this.page += 1;
  }

  async startRenderPromis(mass) {
    const massForRender = await mass;

    const tryGenres = await this.getGenre();
    const genre = massForRender.results;
    genre.forEach((e, i) => {
      genre[i].release_date = genre[i].release_date.slice(0, 4);
      e.genre_ids.forEach((er, ir) => {
        if (ir < 2) {
          genre[i].genre_ids[ir] = ` ${tryGenres[er]}`;
          return;
        }
        if (ir == 2) {
          genre[i].genre_ids[ir] = ` Other`;
          return;
        }
        genre[i].genre_ids.pop();
      });
    });

    refs.galleryList.insertAdjacentHTML('beforeend', tmp(massForRender.results));
  }
}
export default new filmsApiProg('7c9dd50606a07df965d51fc9621e1448');
