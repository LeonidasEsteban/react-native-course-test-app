const BASE_API = 'https://yts.am/api/v2/';

class Api {
  async getSuggestions(id) {
    console.log(id)
    const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`);
    const { data } = await query.json();
    return data.movies
  }
  async getMovies() {
    const query = await fetch(`${BASE_API}list_movies.json?`);
    const { data } = await query.json();
    // debugger
    return data.movies
  }
  // async getComments(id) {
  //   const query = await fetch(`${BASE_API}/movie_comments.json?movie_id=${id}`);
  //   debugger
  //   const data = await query.json();
  //   debugger
  // }
}

export default new Api();
