import { Rating } from "./Rating"

export interface Movie {
    srtLink: string,
    link: string,
    title: string ,
    year: string ,
    rated: string ,
    released: string ,
    runtime: string ,
    genre: string ,
    director: string ,
    writer: string ,
    actors: string ,
    plot: string ,
    language: string ,
    country: string ,
    awards: string ,
    poster: string ,
    // ratings: Rating[],
    metascore: string,
    imdbRating: string,
    imdbVotes: string,
    imdbId: string,
    type: string,
    dvd: string,
    boxOffice: string,
    production: string,
    website: string,
    response: string
}