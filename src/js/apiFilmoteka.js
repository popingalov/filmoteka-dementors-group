import axios from 'axios';

class FilmsApiProg {
        constructor(key){
        this.filmURL = 'https://api.themoviedb.org';
        this.key = key;
    }

    async getTrend(){
        try{
        const filmesFox = await axios.get(`${this.filmURL}/trending/movie/day?api_key=${this.key}`);
        const trending = filmesFox.data;
        return trending;
        } catch (error){
        console.log(error)
        }
    }
    async getIdFilms(filmId){
        try{
        const filmesFox = await axios.get(`${this.filmURL}/movie${filmId}?api_key=${this.key}`);
        const films = filmesFox.data;
        return films;
        } catch (error) {
         console.log(error);
        }
    }
    async getTreilsMovie(movie){
        try{
        const filmesFox = await axios.get(`${this.filmURL}/search/movie?api_key=${this.key}&movie=${movie}`);
        const mabye = filmesFox.data;
        return mabye;
        } catch (error) {
        console.log(error);
        }
    }
    async getFilmsTraing(traing){
        try{
        const filmesFox = await axios.get(`${this.filmURL}/movie/${traing}/videos?api_key=${this.key}&language=en-US`);
        const traingData = filmesFox.data;
        const traingFilm = `https://www.youtube.com/watch?v=${traingData[0].key}`;
        return traingFilm;
        } catch (error){
        console.log(error);
        }
    }
    async getBildFilm(film){
        try{
        const filmesFox = await axios.get(`${this.filmURL}/movie/${film}?api_key=${this.key}`);
        const progThink = filmesFox.data;
        return progThink;
        } catch (error) {
        console.log(error);
        }
    }
}
export default new FilmsApiProg('636eca3db8065a9a271057003d04d67e');