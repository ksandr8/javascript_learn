'use strict';

const numberOfFilms = +prompt('Скільки фільмів ви уже перегляунли?', '');

const personalMovieDB = {             
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Один і останніх переглянутих фільмів?', ''),
      b = prompt('Оцініть фільм?', ''),
      c = prompt('Один і останніх переглянутих фільмів?', ''),
      d = prompt('Оцініть фільм?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);