// Variables

var mot = ["automne","rose", "prix", "parental", "code", "rapiere", "fleuve", "fenetre", "cathedrale", "hiver", "prinptemps", "ete", "vitesse", "constitution", "chimie", "physique", "mathematique", "tissu", "fil"];
var currentDiv = document.getElementById('lettres');
const parFound = document.getElementById('found')
var essais = document.getElementById('essai')
var randomMot;
var decomposition;
var tentative = 8;
var test = document.getElementById('nbTentative');
var countLetter = 0;
test.innerHTML = tentative;
const button = document.getElementById('button')

//--------------------------------------------------------------------------------------------------------

// Fonction choix aléatoire dans Mot + Manip DOM

function chooseMot() {
  randomMot = mot[Math.round(Math.random() * mot.length)].toUpperCase();
  decomposition = randomMot.split(``);
  for (let i = 0; i < decomposition.length; i++) {
    currentDiv.innerHTML += ('<div class="bord"><p class="guess">' + decomposition[i] + '</p></div>');
  };
  return;
}

//--------------------------------------------------------------------------------------------------------

// Test input

function checkLetters() {
  let currentGuess = document.querySelectorAll('.guess');
  let currentFound = document.querySelectorAll('.found');

  if (decomposition.some((element) => element == essais.value.toUpperCase())) {
    currentGuess.forEach(element => {
      if (element.innerHTML == essais.value.toUpperCase()) {
        element.className = "found";
        element.parentNode.style.border="0";
        countLetter += 1;
      }
    })
  }
  else {
    tentative -= 1;
    test.innerHTML = tentative;
  };

  if (test.innerHTML == 0) {
    let perdu = "Dommage, vous avez perdu." + '\n' + "Le mot était :   " + randomMot;
    alert(perdu);
    document.getElementById('click').style.visibility = "visible";
  }
  else if (countLetter === decomposition.length) {
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

