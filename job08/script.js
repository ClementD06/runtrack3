// script.js
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myForm").addEventListener("submit", function(event) {
      event.preventDefault();
  
      var nombre1 = parseInt(document.getElementById("nombre1").value);
      var nombre2 = parseInt(document.getElementById("nombre2").value);
  
      var resultat = sommenombrespremiers(nombre1, nombre2);
      if (resultat !== false) {
        document.getElementById("resultat").textContent = "La somme des nombres premiers est : " + resultat;
      } else {
        document.getElementById("resultat").textContent = "Au moins l'un des nombres n'est pas premier.";
      }
    });
  });
  
  function sommenombrespremiers(nombre1, nombre2) {
    if (estNombrePremier(nombre1) && estNombrePremier(nombre2)) {
      return nombre1 + nombre2;
    } else {
      return false;
    }
  }
  
  function estNombrePremier(nombre) {
    if (nombre < 2) {
      return false;
    }
    
    for (var i = 2; i <= Math.sqrt(nombre); i++) {
      if (nombre % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  