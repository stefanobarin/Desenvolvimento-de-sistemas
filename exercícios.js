1) const readline = require('readline');

function even(InitialValue,Finalvalue) {

  for(i= InitialValue; i <= Finalvalue; i++) {
    if(i % 2 == 0) {
      console.log(i);
    }
  }
}

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var initialnumber,finalnumber = 0;

reader.question("Enter first value:", (x) => {
    initialnumber = answer;

reader.question("Enter final value:", (y) => {
    reader.close();
      even(x, y);

   });



2)const readline = require('readline');

const reader = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

const abilities =["chutar","driblar","cabecear","marcar"];

reader.question("Enter hability:", (answer) => {
 reader.close();
   for(i= 0; i < abilities.length; i++ ) {
     if(abilities[i]== answer) {
       console.log('existe');
       break;
     }
     }
console.log('valor no final do loop ' + i);
  if(abilities[i]!== answer)
  console.log("nao existe");
});



3) const readline = require('readline');

function experience(yearsOfexperience){

 if(yearsOfexperience <= 1 && yearsOfexperience > 0){
 console.log("iniciante");
 }
 else if(yearsOfexperience >1 && yearsOfexperience <= 3){
 console.log("intermediário");
 }
 else if(yearsOfexperience > 3 && yearsOfexperience <= 6){
 console.log("avançado"); 
 }
 else if(yearsOfexperience > 6){
 console.log("jedimaster");
 }
 else{
   console.log("sem experiencia");
 }
}

const reader = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

reader.question("digite os anos de experiencia", answer =>{
experience(answer);
reader.close();

 });

