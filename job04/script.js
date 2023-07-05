function bisextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  function afficherResultat() {
    var annee = 2024;
    var resultat = bisextile(annee);
    var message = "L'année " + annee + " est bissextile : " + resultat;
  
    document.getElementById("resultat").innerHTML = message;
  }