<!-- index.php -->
<!DOCTYPE html>
<html>
<head>
  <title>Somme de nombres premiers</title>
  <script src="script.js"></script>
</head>
<body>
  <!-- Contenu de votre page ici -->
  <h1>Choisissez deux nombres :</h1>
  <form id="myForm">
    <label for="nombre1">Nombre 1 :</label>
    <input type="number" id="nombre1" name="nombre1" required>

    <label for="nombre2">Nombre 2 :</label>
    <input type="number" id="nombre2" name="nombre2" required>

    <button type="submit">Calculer</button>
  </form>

  <div id="resultat"></div>

</body>
</html>

