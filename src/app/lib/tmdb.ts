type MovieData = {
    title: string;
    releaseDate: string;
    overview: string;
  };
  
  export async function getMovieData(movieId: string): Promise<MovieData> {
    const API_KEY = process.env.TMDB_API_KEY;
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
    const data: MovieData = await response.json();
    return data;
  }
  