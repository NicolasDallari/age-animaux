// Fonction pour remplir les options du <select>
function populateSelectOptions() {
  // Sélectionner l'élément <select>
  const selectElement = document.getElementById("age-chat");

  // Parcourir le tableau de données et créer des éléments <option>
  ageData.forEach(function (data) {
    const optionElement = document.createElement("option");
    optionElement.value = data.value;
    optionElement.textContent = data.text;
    selectElement.appendChild(optionElement);
  });
}

function selectDataForm() {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    // Récupérer la valeur sélectionnée
    const ageChat = document.getElementById("age-chat").value;

    // Trouver l'objet correspondant dans le tableau de données
    const selectedAgeData = ageData.find((data) => data.value === ageChat);

    // Récupérer le texte correspondant
    const ageHumain = selectedAgeData ? selectedAgeData.text : "Âge non trouvé";

    // Sélectionner l'élément <p class="resultat">
    const resultatElement = document.querySelector(".resultat");

    // Mettre à jour le contenu de l'élément
    resultatElement.textContent = `Votre chat de ${ageHumain} aurait ${ageChat} s'il était un humain`;

    // Ajouter l'élément au DOM
    const container = document.querySelector(".resultat"); // Sélectionnez le conteneur approprié
    container.appendChild(resultatElement);


  });
}

