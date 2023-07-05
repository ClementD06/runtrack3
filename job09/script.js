// script.js
function tri(numbers, order) {
    if (order === "asc") {
      return trierAscendant(numbers);
    } else if (order === "desc") {
      return trierDescendant(numbers);
    } else {
      console.log("Paramètre 'order' invalide. Utilisez 'asc' ou 'desc'.");
      return numbers;
    }
  }
  
  function trierAscendant(numbers) {
    // Algorithme de tri ascendant personnalisé
    for (var i = 0; i < numbers.length - 1; i++) {
      for (var j = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[j] > numbers[j + 1]) {
          var temp = numbers[j];
          numbers[j] = numbers[j + 1];
          numbers[j + 1] = temp;
        }
      }
    }
  
    return numbers;
  }
  
  function trierDescendant(numbers) {
    // Algorithme de tri descendant personnalisé
    for (var i = 0; i < numbers.length - 1; i++) {
      for (var j = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[j] < numbers[j + 1]) {
          var temp = numbers[j];
          numbers[j] = numbers[j + 1];
          numbers[j + 1] = temp;
        }
      }
    }
  
    return numbers;
  }
  