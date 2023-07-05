<!-- index.php -->
<!DOCTYPE html>
<html>
<head>
  <title>Tri de nombres</title>
  <script src="script.js"></script>
</head>
<body>
  <!-- Contenu de votre page ici -->
  <h1>Tri de nombres</h1>

  <div id="tableau">
    <h2>Tableau initial :</h2>
    <ul id="numbersList"></ul>
  </div>

  <button id="sortButton">Trier</button>

  <div id="resultat">
    <h2>Tableau trié :</h2>
    <ul id="sortedList"></ul>
  </div>

  <script>
    var numbers = [5, 2, 8, 1, 9]; // Remplacez par votre tableau de nombres

    // Afficher le tableau initial
    var numbersList = document.getElementById("numbersList");
    numbers.forEach(function(number) {
      var li = document.createElement("li");
      li.textContent = number;
      numbersList.appendChild(li);
    });

    // Ajouter un écouteur d'événement au bouton de tri
    var sortButton = document.getElementById("sortButton");
    sortButton.addEventListener("click", function() {
      var sortedList = document.getElementById("sortedList");
      sortedList.innerHTML = ""; // Effacer le contenu précédent

      var order = "asc"; // Remplacez par "asc" ou "desc"
      var resultat = tri(numbers, order);

      // Afficher le tableau trié
      resultat.forEach(function(number) {
        var li = document.createElement("li");
        li.textContent = number;
        sortedList.appendChild(li);
      });
    });

    // Votre fonction tri(), trierAscendant() et trierDescendant() ici...
  </script>
</body>
</html>

