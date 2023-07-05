
<!DOCTYPE html>
<html>
<head>
  <title>Statut du jour</title>
  <script src="script.js"></script>
</head>
<body>

  <h1>Choisissez une date :</h1>
  <input type="date" id="datePicker">
  <button onclick="afficherStatut()">Afficher le statut</button>

  <script>
    function afficherStatut() {
      var datePicker = document.getElementById("datePicker");
      var selectedDate = new Date(datePicker.value);
      jourtravaille(selectedDate);
    }


  </script>
</body>
</html>
