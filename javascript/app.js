"use strict";

let Name= prompt('please enter your name');

let FavFood= prompt('do you like Italian food ?,  (yes(y) or no(n))');
 FavFood=FavFood.toLowerCase()
if ( FavFood ==='yes'||FavFood==='y'){ 
  alert('I will teach you how to make Italian food')
}
else{
  alert ('what about chinese food ?')
}


console.log(FavFood, "Correct");

let soccor= prompt('do you like soccor  ?,  (yes(y) or no(n))');
soccor=soccor.toLowerCase()
if ( soccor ==='yes'||soccor==='y'){ 
  alert('you should like barcelona')
}
else{
  alert ('so do you  like tennis?')
}


console.log(soccor, "Correct");

let age = prompt('are you 18+  ?,  (yes(y) or no(n))');
age=age.toLowerCase()
if ( age ==='yes'||age==='y'){ 
  alert('you are adult enough ')
}
else{
  alert ('you will grow up soon')
}


console.log(age, "Correct");


let travel = prompt('do you like to travel ?,  (yes(y) or no(n))');
travel=travel.toLowerCase()
if ( travel ==='yes'||travel==='y'){ 
  alert('lets go somewhere ')
}
else{
  alert ('so what would you like to do ?')
}


console.log(travel, "Correct");


let sleep = prompt('do you like sleeping ?,  (yes(y) or no(n))');
sleep=sleep.toLowerCase()
if ( sleep ==='yes'||sleep==='y'){ 
  alert('you are awesome  ')
}
else{
  alert ('go and work ')
}


console.log(sleep, "Correct");
