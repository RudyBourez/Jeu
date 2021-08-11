// Variables

var mot = ["automne","rose", "prix", "parental", "code", "rapiere", "fleuve", "fenetre", "cathedrale", "hiver", "prinptemps", "ete", "vitesse", "constitution", "chimie", "physique", "mathematique", "tissu", "fil"];
var currentDiv = document.getElementById('lettres');
const parFound = document.getElementById('found')
var essais = document.getElementById('essai')
var randomMot;
var decomposition;
var tentative = 8;
var test = document.getElementById('nbTentative');
test.innerHTML = tentative;
const button = document.getElementById('button')
var final

//--------------------------------------------------------------------------------------------------------

// Fonction choix aléatoire dans Mot + Manip DOM

function chooseMot() {
  randomMot = mot[Math.round(Math.random() * mot.length)].toUpperCase();
  decomposition = randomMot.split(``);
  for (let i = 0; i < decomposition.length; i++) {
    currentDiv.innerHTML += ('<div class="bord"><p id="letter'+i+'"></p></div>');
  };
  return;
}

//--------------------------------------------------------------------------------------------------------

// Test input

function checkLetters() {

  if (decomposition.every((element) => element != essais.value.toUpperCase())) {
    tentative -= 1;
    test.innerHTML = tentative;
  }

    for (let i=0; i < decomposition.length; i++){
      let currentGuess = document.getElementById('letter'+i+'');
      if (decomposition[i] == essais.value.toUpperCase()) {
        currentGuess.innerHTML = essais.value.toUpperCase();
        currentGuess.parentNode.style.border="0"
        currentGuess.classList.add('victoire');
      }}
      let victoire = document.getElementsByClassName('victoire');
  if (test.innerHTML == 0) {
    let perdu = "Dommage, vous avez perdu." + '\n' + "Le mot était :   " + randomMot;
    alert(perdu);
    document.getElementById('click').style.visibility = "visible";
  }
  
  else if (victoire.length == randomMot.length) {
    setTimeout(function () {
      alert("Bravo, vous avez gagné!!!");
      document.getElementById('click').style.visibility = "visible";
    }, 200)
  }
  essais.value = "";
}

//--------------------------------------------------------------------------------------------------------

// reset
function reset() {
  for (i = 0; i < decomposition.length; i++) {
    currentDiv.innerHTML -= ('<div><p></p></div>')
  };
  currentDiv.textContent = "";
  tentative = 8;
  test.innerHTML = tentative;
  countLetter = 0;
  document.getElementById('click').style.visibility = "hidden";
  chooseMot();
  return;
}
chooseMot();

// ----------------------------------------------------------------------------------

document.getElementById('essai').addEventListener('keyup', checkLetters);
document.getElementById('click').addEventListener('click', reset);

