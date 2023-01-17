"use strict";
<<<<<<< HEAD
/*1 */
/*const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
=======
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
>>>>>>> 52622918fea8fb23a5def598030b84cf68f6a6c9
console.log(numberOfFilms);


const personalMovieDB ={
     count:numberOfFilms,
     movies:{},
     actors:{},
     genres:[],
<<<<<<< HEAD
     privat:false,
=======
     privat:false
>>>>>>> 52622918fea8fb23a5def598030b84cf68f6a6c9
};
const watchFilms = prompt('Один из последних просмотренных фильмов?',''),
      watchFilms2 = prompt('Насколько оцените его?',''),
      watchFilms3 = prompt('Один из последних просмотренных фильмов?',''),
      watchFilms4 = prompt('Насколько оцените его?','');

<<<<<<< HEAD
      personalMovieDB.movies[watchFilms]= watchFilms2;
personalMovieDB.movies[watchFilms3]= watchFilms4;
console.log(personalMovieDB);
*/

/*2 */
let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!');
}




// 1
function firstTask() {
   
  for (let i = 5; i <= 10; i++) { 
    console.log(i);
  }
   }
   firstTask();
  
  // 2
  function secondTask() {
      // Пишем решение вот тут
      for (let i = 20; i >= 10; i--) { 
            if (i === 13) {
           continue;}
           console.log(i);
          }
  }
  secondTask();

//3
      function thirdTask() {
        for (let i = 2; i <= 10; i++) { 
          if (i % 2==0) {
            console.log(i);
          }     
           }
   
         }
         thirdTask();

       





/*4 задача */
              let i = 2;
while (i <= 16) { 
 
  if (i % 2 === 0) {
    i++;
    continue;
} else {
    console.log(i);
}
i++;
}

/*5 задача */


function fifthTask() {
  const arrayOfNumbers = [];
  for (i = 5; i <=10; i++) { 
 arrayOfNumbers[0]=i;
   console.log(arrayOfNumbers);
   }
  

  // Не трогаем
  return arrayOfNumbers;
}
fifthTask();





/*1 ЗАДАЧА 23видео
Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, 
а к элементам обращаемся все так же: arr[0], arr[1] и тд.
Должен получиться точно такой же массив*/


// Место для первой задачи
function firstTask() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const arr = [3, 5, 8, 16, 20, 23, 50];
  const result = [];

  // Пишем решение вот тут
  for(i=0; i<arr.length; i++){
    result[i]=arr[i];  
  }
  console.log(result);
  // Не трогаем
  return result;
}
firstTask();




//2
function secondTask() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const data = [5, 10, 'Shopping', 20, 'Homework'];

  // Пишем решение вот тут
  for(i=0;i<data.length;i++){
    if ( typeof data[i]=='number'){
  data[i]=data[i]*2;

     }
     else if ( typeof data[i]=='string'){
      data[i]=data[i]+' - done';
     }
  }
console.log(data);
  // Не трогаем
  return data;
}
secondTask();




// 3
function thirdTask() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const data = [5, 10, 'Shopping', 20, 'Homework'];
  const result = [];

  // Пишем решение вот тут
  for(i=0;i<data.length;i++){

result[0]=data[4];
result[1]=data[3];
result[2]=data[2];
result[3]=data[1];
result[4]=data[0];
     }
console.log(result);
  // Не трогаем
  return result;
}
thirdTask();



//4
const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней

for(let i=0; i<=lines; i++){

  for(let j=5; j>i; j--){
    result +=" ";
  } 
  for(let k=0; k<=i*2; k++){

    result +="*";
  }

  result+="\n";
}
console.log(result);


/*практика ч2
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/

//2
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
for(let i=0;i<2;i++){
 const a = prompt('Один из последних просмотренных фильмов?',''),
       b = prompt('Насколько оцените его?','');
           if ( a!=null && b!=null && a.length<50 && b.length<50 && a!='' & b!=''){
            personalMovieDB.movies[a]= b;
       console.log('done');
               }
  else{
    console.log('err');
  i--;
  }





  
if(personalMovieDB.count<10){
  alert("Просмотрено довольно мало фильмов");
}
else if(personalMovieDB.count<30 && personalMovieDB.count>10){
  alert("Вы классический зритель");
 
}
else if(personalMovieDB.count>30){
  alert("Вы киноман");
}
else{
  alert("Произошла ошибка");
}
}
console.log(personalMovieDB);
//3


=======
personalMovieDB.movies[watchFilms]= watchFilms2;
personalMovieDB.movies[watchFilms3]= watchFilms4;

console.log(personalMovieDB);
>>>>>>> 52622918fea8fb23a5def598030b84cf68f6a6c9
