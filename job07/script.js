// script.js
function jourtravaille(date) {
    var jour = date.getDate();
    var mois = date.getMonth() + 1;
    var annee = date.getFullYear();
  
    var jourSemaine = date.getDay();
    var estWeekend = jourSemaine === 0 || jourSemaine === 6;
    
    var joursFeries2020 = [
      new Date(2020, 0, 1),   // Jour de l'An
      new Date(2020, 3, 10),  // Vendredi saint
      new Date(2020, 4, 1),   // Fête du Travail
      new Date(2020, 4, 8),   // Victoire 1945
      new Date(2020, 4, 21),  // Fête de la Musique
      new Date(2020, 6, 14),  // Fête Nationale
      new Date(2020, 7, 15),  // Assomption
      new Date(2020, 10, 1),  // Toussaint
      new Date(2020, 10, 11), // Armistice 1918
      new Date(2020, 11, 25), // Noël
    ];
  
    for (var i = 0; i < joursFeries2020.length; i++) {
      if (
        joursFeries2020[i].getDate() === jour &&
        joursFeries2020[i].getMonth() === date.getMonth()
      ) {
        console.log("Le " + jour + " " + mois + " " + annee + " est un jour férié");
        return;
      }
    }
  
    if (estWeekend) {
      console.log("Non, " + jour + " " + mois + " " + annee + " est un week-end");
    } else {
      console.log("Oui, " + jour + " " + mois + " " + annee + " est un jour travaillé");
    }
  }
  