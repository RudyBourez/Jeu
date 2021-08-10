// Variables

var mot = ["automne","parental","code","rapiere","fleuve","fenetre","cathedrale", "hiver", "prinptemps", "ete", "vitesse", "constitution", "chimie", "physique", "mathematique", "tissu", "fil"];
var currentDiv = document.getElementById('lettres');
const parFound = document.getElementById('found')
var essais = document.getElementById('essai')
var randomMot; 
var decomposition; 
var tentative = 8;
var test = document.getElementById('nbTentative');



//--------------------------------------------------------------------------------------------------------

// Fonction choix aléatoire dans Mot + Manip DOM

function chooseMot (){
  randomMot = mot[Math.floor(Math.random() * mot.length)];
  decomposition = randomMot.split(``);  
  for (let i=0; i<decomposition.length; i++){ 
      currentDiv.innerHTML += ('<div class="bord"><p class="guess">'+decomposition[i]+'</p></div>');
  };
  return;
}
  
//--------------------------------------------------------------------------------------------------------

// Test input

function checkLetters () {
  let currentGuess = document.querySelectorAll('.guess');
  let currentFound = document.querySelectorAll('.found');
  currentGuess.forEach(element => {
    if (element.innerHTML == essais.value) {
      element.className="found";
    }
    else {
      tentative -=1;
    }
  });
  if (tentative === 0){
    console.log("Perdu");
  } 
  // else if (currentFound.every()
  essais.value = "";
  return;
}

//--------------------------------------------------------------------------------------------------------

// reset
function reset (){
  for (i=0; i< decomposition.length; i++){
    currentDiv.innerHTML -= ('<div><p></p></div>')};
    currentDiv.textContent = "";
    return;
}
// ----------------------------------------------------------------------------------

document.getElementById('essai').addEventListener('keypress', checkLetters);
