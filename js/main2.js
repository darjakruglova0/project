"use strict";
 
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
/*console.log(numberOfFilms);
*/
const personalMovieDB ={
     count:numberOfFilms,
     movies:{},
     actors:{},
     genres:[],
     privat:false
};

if(personalMovieDB.count<10){
  alert("Просмотрено довольно мало фильмов");
}
else if(personalMovieDB.count>=10 && personalMovieDB.count<=30){
  alert("Вы классический зритель");
 
}
else if(personalMovieDB.count>30){
  alert("Вы киноман");
}
else{
  alert("Произошла ошибка");
}








/*for(let i=0;i<2;i++){

 const a = prompt('Один из последних просмотренных фильмов?',''),
       b = prompt('Насколько оцените его?','');
       
           if ( a!=null && b!=null && a.length<50 && b.length<50 && a!='' & b!=''){
            personalMovieDB.movies[a]= b;
       
               }
  else{
  i--;
  }





  
}*/

console.log(personalMovieDB);







