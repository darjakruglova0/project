"use strict";
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
console.log(numberOfFilms);


const personalMovieDB ={
     count:numberOfFilms,
     movies:{},
     actors:{},
     genres:[],
     privat:false
};
const watchFilms = prompt('Один из последних просмотренных фильмов?',''),
      watchFilms2 = prompt('Насколько оцените его?',''),
      watchFilms3 = prompt('Один из последних просмотренных фильмов?',''),
      watchFilms4 = prompt('Насколько оцените его?','');

personalMovieDB.movies[watchFilms]= watchFilms2;
personalMovieDB.movies[watchFilms3]= watchFilms4;

console.log(personalMovieDB);