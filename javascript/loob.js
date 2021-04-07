"use strict";




let pass= prompt('enter your password')
let con= prompt('confirm your password')


while (!(pass===con)) {
    pass = prompt('it is not matching, repeat the password')
     con  = prompt('confirm the password again')
    
}
console.log('your password is '+ pass);










let Name= prompt('please enter your name');
alert('Welcome ' + Name)

let score = 0;


function question01(){
let FavFood= prompt('do you think I am crazy  ?,  (yes(y) or no(n))');
 FavFood=FavFood.toLowerCase()
if ( FavFood ==='yes'||FavFood==='y'){ 
  alert('great ')
  score=score + 1 
}
else{
  alert ('I am abdelmajed')
}


console.log(FavFood, "Correct");
}
question01();


function question02(){
let soccor= prompt('do you think I am older than 18?,  (yes(y) or no(n))');
soccor=soccor.toLowerCase()
if ( soccor ==='yes'||soccor==='y'){ 
  alert('that is right')
  score=score + 1 

}
else{
  alert ('I am 25')
}


console.log(soccor, "Correct");
}
question02();

function question03(){
let age = prompt('do you think I love food  ?,  (yes(y) or no(n))');
age=age.toLowerCase()
if ( age ==='yes'||age==='y'){ 
  alert('who does not love food ?')
  score=score + 1 

}
else{
  alert ('that is wrong answer')
}


console.log(age, "Correct");
}
question03();

function question04(){
let travel = prompt('do you think that I like football?,  (yes(y) or no(n))');
travel=travel.toLowerCase()
if ( travel ==='yes'||travel==='y'){ 
  alert('yes I love barcelona ')
  score=score + 1 

}
else{
  alert ('no I like football')
}


console.log(travel, "Correct");
}
question04();

function question05(){
let sleep = prompt('am I  a good guy ?,  (yes(y) or no(n))');
sleep=sleep.toLowerCase()
if ( sleep ==='yes'||sleep==='y'){ 
  alert('you are awesome  ')
  score=score + 1 

}
else{
  alert ('thank you ')
}


console.log(sleep, "Correct");
}
question05();


function question06(){
let num = prompt('guess a number')
num = parseInt(num)
for (let i = 0; i <= 3; i++) {

  if (num>55) {
    alert('it is too high')
    
    }

else if (num<45) {
    alert('it is too low')
  } 
  
else if (num == 50){
        alert('you got it ')
        score=score + 1 
        break
    }
    else{
    alert('you are close, try number with not more than 5 in defferance')
    }

  num = prompt('guess a number')
}
return num;
}
question06();


function question07(){
let array = ['apple','banana','orange','keywe','mango','tomato']

let fruit = prompt('guess a fruit')

loop1 :{ for (let i = 0; i < 6; i++) {
  
  for (let j = 0; j < array.length; j++) {
    
  if (fruit == array[j]){

    alert('amazing, you found it, your answer is  '+ array[j])
    alert('here are all the answers  '+array)
    score=score + 1
    break loop1
    
 }
 

}
fruit = prompt('try different fruit')

}}
return fruit;
}
question07();

alert('this is your final score  ' + score)
  




